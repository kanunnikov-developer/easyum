'use client';

import styles from './styles.module.css';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { questions } from '../lib/questions'; // ← твои вопросы
import { submitTestForm } from '../lib/action';
import cn from 'classnames';

export default function TestForm() {
	const [step, setStep] = useState(1);

	// Состояние для финального шага
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');

	const [answers, setAnswers] = useState<Record<number, string | string[]>>({});

	// Ошибки и состояние после отправки
	const [serverState, setServerState] = useState<{
		error: string | null;
		fieldErrors?: { name?: string; phone?: string };
		success: boolean;
		score?: number;
	}>({
		error: null,
		success: false,
		fieldErrors: { name: '', phone: '' },
	});

	const currentQuestion = questions[step - 1];
	const isQuestionStep = step <= questions.length;
	const isFinalFormStep = step === questions.length + 1;
	const isResultStep = step === questions.length + 2;

	// Подсчёт всех баллов
	const totalPoints = Object.entries(answers).reduce((sum, [qIdStr, value]) => {
		const qId = Number(qIdStr);
		const q = questions.find((q) => q.id === qId);
		if (!q?.points) return sum;

		if (q.multiple && Array.isArray(value)) {
			// Множественный: суммируем баллы по всем выбранным
			return sum + value.reduce((acc, v) => acc + (q.points[v] || 0), 0);
		} else if (typeof value === 'string') {
			// Одиночный
			return sum + (q.points[value] || 0);
		}
		return sum;
	}, 0);

	const handleSelect = (questionId: number, value: string) => {
		const question = questions.find((q) => q.id === questionId);
		if (!question) return;

		setAnswers((prev) => {
			const current = prev[questionId];

			if (question.multiple) {
				const arr = Array.isArray(current) ? [...current] : [];
				if (arr.includes(value)) {
					return { ...prev, [questionId]: arr.filter((v) => v !== value) };
				}
				return { ...prev, [questionId]: [...arr, value] };
			} else {
				return { ...prev, [questionId]: value };
			}
		});

		// Авто-переход ТОЛЬКО для одиночных
		if (!question.multiple) {
			setTimeout(() => {
				if (step < questions.length) {
					setStep(step + 1);
				} else {
					setStep(questions.length + 1);
				}
			}, 280);
		}
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('name', name.trim());
		formData.append('phone', phone.trim());
		formData.append('answers', JSON.stringify(answers));
		// ← вот так правильно передаём число
		formData.append('totalPoints', totalPoints.toString());

		const result = await submitTestForm({ error: null, success: false }, formData);
		setServerState(result);

		if (result.success) {
			setStep(questions.length + 2);
		}
	};

	const progress = ((step - 1) / (questions.length + 1)) * 100;

	// Проверка: есть ли хотя бы один ответ на текущем вопросе
	const hasAnswer = currentQuestion
		? currentQuestion.multiple
			? Array.isArray(answers[currentQuestion.id]) && (answers[currentQuestion.id] as string[]).length > 0
			: !!answers[currentQuestion.id]
		: false;

	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<div className={styles.progressBar}>
					<div className={styles.progressFill} style={{ width: `${progress}%` }} />
				</div>

				{isQuestionStep && currentQuestion ? (
					<motion.div
						key={step}
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -40 }}
						transition={{ duration: 0.3 }}
						className={styles.grid}
					>
						<div className={styles.left}>
							<h2 className={styles.question}>{currentQuestion.text}</h2>
							<p className={styles.description}>{currentQuestion.description}</p>
							<div className={styles.stepInfo}>
								Шаг {step} / {questions.length}
							</div>
						</div>

						<div className={styles.right}>
							<div className={styles.options}>
								{currentQuestion?.options.map((opt) => {
									// Проверяем, выбран ли вариант (для обоих типов вопросов)
									const isSelected = currentQuestion.multiple
										? (answers[currentQuestion.id] as string[] | undefined)?.includes(opt.value)
										: answers[currentQuestion.id] === opt.value;

									return (
										<button
											key={opt.value}
											type='button'
											onClick={() => handleSelect(currentQuestion.id, opt.value)}
											className={cn(
												styles.option,
												isSelected && styles.optionSelected, // ← применяем ко всем выбранным
											)}
										>
											{currentQuestion.multiple && (
												<span className={cn(styles.checkbox, isSelected && styles.checkboxChecked)} />
											)}
											{opt.label}
										</button>
									);
								})}
							</div>

							<div className={styles.buttons}>
								<button
									type='button'
									onClick={() => setStep((p) => Math.max(1, p - 1))}
									disabled={step === 1}
									className={`${styles.btn} ${step === 1 ? styles.btnDisabled : ''}`}
								>
									Назад
								</button>

								<button
									type='button'
									disabled={!hasAnswer}
									onClick={() => {
										if (step < questions.length) {
											setStep(step + 1);
										} else {
											setStep(questions.length + 1);
										}
									}}
									className={cn(styles.btn, styles.btnPrimary, !hasAnswer && styles.btnDisabled)}
								>
									Далее
								</button>
							</div>
						</div>
					</motion.div>
				) : null}

				{isFinalFormStep && (
					<motion.div
						key='form'
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.35 }}
						className={styles.grid}
					>
						<div className={styles.left}>
							<h2 className={styles.question}>Остался последний шаг</h2>
							<p className={styles.description}>Введите имя и телефон, чтобы увидеть результат</p>
							<div className={styles.stepInfo}>
								Шаг {step} / {questions.length + 1}
							</div>
						</div>

						<div className={styles.right}>
							<form onSubmit={handleSubmit} className={styles.form}>
								<input
									type='text'
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder='Ваше имя'
									className={styles.input}
									autoFocus
								/>
								{serverState.fieldErrors?.name && <p className={styles.error}>{serverState.fieldErrors.name}</p>}

								<input
									type='tel'
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									placeholder='Телефон'
									className={styles.input}
								/>
								{serverState.fieldErrors?.phone && <p className={styles.error}>{serverState.fieldErrors.phone}</p>}

								<div className={styles.buttons}>
									<button type='button' onClick={() => setStep(step - 1)} className={styles.btn}>
										Назад
									</button>
									<button type='submit' className={`${styles.btn} ${styles.btnPrimary}`}>
										Получить результат
									</button>
								</div>
							</form>
						</div>
					</motion.div>
				)}

				{isResultStep && (
					<motion.div
						key='result'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className={styles.result}
					>
						{(() => {
							const percent = (totalPoints / 36) * 100;

							if (percent <= 70) {
								return (
									<div className={styles.resultDescription}>
										<h2 style={{ color: 'var(--red-color)' }}>Неудачно!</h2>
										<p className={styles.scoreDesc}>
											Вы набрали: <span className={styles.score}>{totalPoints} из 36 баллов</span>
										</p>
										<p>Вы не справились с тестом! Повторите попытку</p>
									</div>
								);
							}

							if (percent >= 70) {
								return (
									<div className={styles.resultDescription}>
										<h2 className='accent'>Поздравляем!</h2>
										<p className={styles.scoreDesc}>
											Вы набрали: <span className={styles.score}>{totalPoints} из 36 баллов</span>
										</p>
										<p>Вы справились с тестом.</p>
									</div>
								);
							}
						})()}

						<button
							onClick={() => {
								setStep(1);
								setAnswers({});
								setName('');
								setPhone('');
								setServerState({ error: null, success: false });
							}}
							className={`${styles.btn} ${styles.btnPrimary}`}
						>
							Пройти заново
						</button>
					</motion.div>
				)}
			</div>
		</div>
	);
}

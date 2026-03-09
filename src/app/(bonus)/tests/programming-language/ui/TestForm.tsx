'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { questions } from '../lib/questions'; // ← твои вопросы
import { submitTestForm } from '../lib/action'; // ← сервер action

export default function TestForm() {
	const [step, setStep] = useState(1);
	const [answers, setAnswers] = useState<Record<number, string>>({});

	// Состояние для финального шага
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');

	// Ошибки и состояние после отправки
	const [serverState, setServerState] = useState<{
		error: string | null;
		fieldErrors?: { name?: string; phone?: string };
		success: boolean;
	}>({
		error: null,
		success: false,
		fieldErrors: { name: '', phone: '' },
	});

	const currentQuestion = questions[step - 1];
	const isQuestionStep = step <= questions.length;
	const isFinalFormStep = step === questions.length + 1;
	const isResultStep = step === questions.length + 2;

	const handleSelect = (value: string) => {
		setAnswers((prev) => ({
			...prev,
			[currentQuestion.id]: value,
		}));

		// Вариант А: авто-переход после выбора (популярно в квизах)
		setTimeout(() => {
			if (step < questions.length) {
				setStep(step + 1);
			} else {
				setStep(questions.length + 1);
			}
		}, 280);

		// Вариант Б: оставить кнопку «Далее» — тогда закомментируй setTimeout выше
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('name', name.trim());
		formData.append('phone', phone.trim());
		formData.append('answers', JSON.stringify(answers));

		const result = await submitTestForm({ error: null, success: false }, formData);
		setServerState(result);

		if (result.success) {
			setStep(questions.length + 2);
		}
	};

	const progress = ((step - 1) / (questions.length + 1)) * 100; // +1 чтобы учесть финальный шаг

	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<div className={styles.progressBar}>
					<div className={styles.progressFill} style={{ width: `${progress}%` }} />
				</div>

				{isQuestionStep && currentQuestion && (
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
								Шаг {step} из {questions.length}
							</div>
						</div>

						<div className={styles.right}>
							<div className={styles.options}>
								{currentQuestion.options.map((opt) => (
									<button
										key={opt.value}
										type='button'
										onClick={() => handleSelect(opt.value)}
										className={`${styles.option} ${
											answers[currentQuestion.id] === opt.value ? styles.optionSelected : ''
										}`}
									>
										{opt.label}
									</button>
								))}
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

								{/* Если хочешь оставить кнопку «Далее», раскомментируй */}
								<button
									type='button'
									disabled={!answers[currentQuestion.id]}
									onClick={() => setStep(step < questions.length ? step + 1 : questions.length + 1)}
									className={`${styles.btn} ${styles.btnPrimary} ${!answers[currentQuestion.id] ? styles.btnDisabled : ''}`}
								>
									Далее
								</button>
							</div>
						</div>
					</motion.div>
				)}

				{isFinalFormStep && (
					<motion.div
						key='final'
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.35 }}
						className={styles.grid}
					>
						<div className={styles.left}>
							<h2 className={styles.question}>Последний шаг</h2>
							<p className={styles.description}>Введите имя и телефон, чтобы получить персональную рекомендацию</p>
							<div className={styles.stepInfo}>
								Шаг {step} из {questions.length + 1}
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

								{/* {serverState.error && !serverState.errors && <p className={styles.error}>{serverState.error}</p>} */}

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
						initial={{ opacity: 0, scale: 0.92 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4 }}
						className={styles.result}
					>
						{(() => {
							if (answers[5] === 'c') {
								return (
									<div className={styles.resultDescription}>
										<h3>Язык программирования Java </h3>
										<br />
										<br />
										<p>
											<b>Что делают:</b> Разрабатывают корпоративные системы, банковские приложения, Android-приложения,
											высоконагруженные сервисы.
										</p>
										<br />
										<p>
											<b>Для кого:</b> Кто хочет строить карьеру в крупных компаниях, любит структурированный подход,
											готов учиться основательно.
										</p>
										<br />
										<p>
											<strong>🎁 Бонус:</strong>
										</p>
										<br />
										<p>
											- Скидка 5% на покупку любого курса -{' '}
											<b>
												<span className='accent'>TYUFGK</span>
											</b>{' '}
											(укажите промокод при покупке курса или скажите его менеджеру)
										</p>
										<br />
										<p>
											- Получите бесплатную запись первого урока в нашем{' '}
											<b>
												<a href='https://t.me/easyumru' className='accent' target='_blank'>
													Telegram канале
												</a>
											</b>
										</p>
									</div>
								);
							}
							if (answers[5] === 'd') {
								return (
									<div className={styles.resultDescription}>
										<h3>Язык программирования JavaScript </h3>
										<br />
										<br />
										<p>
											<b>Что делают:</b> Создают интерактивные сайты, веб-приложения, мобильные приложения и даже
											серверы. Это язык для frontend (внешний вид сайтов), но также работает и на backend.
										</p>
										<br />
										<p>
											<b>Для кого:</b> Кто хочет быстро видеть результаты, работать в вебе, легко начать.
										</p>
										<br />
										<p>
											<strong>🎁 Бонус:</strong>
										</p>
										<br />
										<p>
											- Скидка 5% на покупку любого курса -{' '}
											<b>
												<span className='accent'>TYUFGK</span>
											</b>{' '}
											(укажите промокод при покупке курса или скажите его менеджеру)
										</p>
										<br />
										<p>
											- Получите бесплатную запись первого урока в нашем{' '}
											<b>
												<a href='https://t.me/easyumru' className='accent' target='_blank'>
													Telegram канале
												</a>
											</b>
										</p>
									</div>
								);
							}
							if (answers[5] === 'a') {
								return (
									<div className={styles.resultDescription}>
										<h3>Язык программирования Python</h3>
										<br />
										<br />
										<p>
											<b>Что делают:</b> Автоматизируют задачи, анализируют данные, создают веб-сайты, работают с
											искусственным интеллектом и машинным обучением.
										</p>
										<br />
										<p>
											<b>Для кого:</b> Кто интересуется анализом данных, хочет логичный и читаемый код, быстро решать
											практические задачи.
										</p>
										<br />
										<p>
											<strong>🎁 Бонус:</strong>
										</p>
										<br />
										<p>
											- Скидка 5% на покупку любого курса -{' '}
											<b>
												<span className='accent'>TYUFGK</span>
											</b>{' '}
											(укажите промокод при покупке курса или скажите его менеджеру)
										</p>
										<br />
										<p>
											- Получите бесплатную запись первого урока в нашем{' '}
											<b>
												<a href='https://t.me/easyumru' className='accent' target='_blank'>
													Telegram канале
												</a>
											</b>
										</p>
									</div>
								);
							}
							if (answers[5] === 'b') {
								return (
									<div className={styles.resultDescription}>
										<h3>Язык программирования PHP</h3>
										<br />
										<br />
										<p>
											<b>Что делают:</b> Создают сайты и веб-приложения, особенно интернет-магазины, блоги,
											корпоративные порталы.
										</p>
										<br />
										<p>
											<b>Для кого:</b> Кто хочет быстро начать работать в веб-разработке, создавать сайты "под ключ".
										</p>
										<br />
										<p>
											<strong>🎁 Бонус:</strong>
										</p>
										<br />
										<p>
											- Скидка 5% на покупку любого курса -{' '}
											<b>
												<span className='accent'>TYUFGK</span>
											</b>{' '}
											(укажите промокод при покупке курса или скажите его менеджеру)
										</p>
										<br />
										<p>
											- Получите бесплатную запись первого урока в нашем{' '}
											<b>
												<a href='https://t.me/easyumru' className='accent' target='_blank'>
													Telegram канале
												</a>
											</b>
										</p>
									</div>
								);
							}
							if (answers[5] === 'e') {
								return (
									<div className={styles.resultDescription}>
										<h3>Язык программирования C++</h3>
										<br />
										<br />
										<p>
											<b>Что делают:</b> Разрабатывают игры, сложные системы (операционные, банковские), программы где
											важна скорость и эффективность.
										</p>
										<br />
										<p>
											<b>Для кого:</b> Кто любит глубокое понимание компьютера, готов к сложному обучению, хочет
											работать с фундаментальными технологиями.
										</p>
										<br />
										<p>
											<strong>🎁 Бонус:</strong>
										</p>
										<br />
										<p>
											- Скидка 5% на покупку любого курса -{' '}
											<b>
												<span className='accent'>TYUFGK</span>
											</b>{' '}
											(укажите промокод при покупке курса или скажите его менеджеру)
										</p>
										<br />
										<p>
											- Получите бесплатную запись первого урока в нашем{' '}
											<b>
												<a href='https://t.me/easyumru' className='accent' target='_blank'>
													Telegram канале
												</a>
											</b>
										</p>
									</div>
								);
							}
							return <p>Уровень не определен, повторите попытку + {answers[5]}</p>;
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

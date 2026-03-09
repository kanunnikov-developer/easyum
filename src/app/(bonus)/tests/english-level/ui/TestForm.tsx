'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import { questions } from '../lib/questions';
import { submitTestForm } from '../lib/action';

export default function TestForm() {
	const [step, setStep] = useState(1);

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');

	const [answers, setAnswers] = useState<Record<number, string>>({});
	const [pointsByQuestion, setPointsByQuestion] = useState<Record<number, number>>({});

	const [serverState, setServerState] = useState<{
		error: string | null;
		fieldErrors?: { name?: string; phone?: string };
		success: boolean;
		score?: number;
		result?: string;
	}>({
		error: null,
		success: false,
		fieldErrors: { name: '', phone: '' },
	});

	const currentQuestion = questions[step - 1];
	const isLastQuestion = step === questions.length;
	const isFormStep = step === questions.length + 1;
	const isResultStep = step === questions.length + 2;

	const hasAnswer = !!answers[currentQuestion?.id];

	// Вычисляемая сумма баллов
	const totalPoints = Object.values(pointsByQuestion).reduce((sum, pts) => sum + pts, 0);

	const handleAnswer = (value: string) => {
		const q = currentQuestion;
		const points = q.points[value as keyof typeof q.points] || 0;

		setAnswers((prev) => ({ ...prev, [q.id]: value }));
		setPointsByQuestion((prev) => ({ ...prev, [q.id]: points })); // ← замена, а не добавление

		setTimeout(() => {
			if (isLastQuestion) setStep(questions.length + 1);
			else setStep((prev) => prev + 1);
		}, 300);
	};

	const goBack = () => {
		if (step > 1) setStep((prev) => prev - 1);
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

	const progress = ((step - 1) / questions.length) * 100;

	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<div className={styles.progressBar}>
					<div className={styles.progressFill} style={{ width: `${progress}%` }} />
				</div>

				{step <= questions.length && currentQuestion && (
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
								Шаг: {step} / {questions.length}
							</div>
						</div>

						<div className={styles.right}>
							<div className={styles.options}>
								{currentQuestion.options.map((opt) => (
									<button
										key={opt.value}
										onClick={() => handleAnswer(opt.value)}
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
									onClick={goBack}
									disabled={step === 1}
									className={`${styles.btn} ${step === 1 ? styles.btnDisabled : ''}`}
								>
									Назад
								</button>

								<button
									type='button'
									onClick={() => setStep(step < questions.length ? step + 1 : questions.length + 1)}
									disabled={!answers[currentQuestion.id]}
									className={`${styles.btn} ${styles.btnPrimary} ${!hasAnswer ? styles.btnDisabled : ''}`}
								>
									Далее
								</button>
							</div>
						</div>
					</motion.div>
				)}

				{isFormStep && (
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
								Шаг: {step} / {questions.length + 1}
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
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className={styles.result}
					>
						<h2>Ваш результат</h2>
						<p className={styles.score}>
							{totalPoints} из {questions.length} баллов
						</p>
						{(() => {
							const percent = (totalPoints / questions.length) * 100;

							if (percent <= 29) {
								return (
									<div className={styles.resultDescription}>
										<h3>Уровень 1: Начальный (Beginner)</h3>
										<br />
										<p>
											<b>Примерный навык:</b> Знание отдельных слов и простейших фраз. Общение возможно только в очень
											ограниченных бытовых ситуациях с активной помощью собеседника. Понимание речи или текста
											фрагментарное.
										</p>
										<br />
										<p>
											<b>Рекомендация:</b>
											<br />
											<br />
											<b>С чего начать:</b> Вам нужны основы. Сфокусируйтесь на базовой грамматике (глагол to be,
											Present Simple, артикли, построение простых предложений) и самом необходимом словаре (семья, дом,
											еда, действия). Идеально подойдут:
											<br />
											<br />
										</p>
										<p>
											1. Курсы для начинающих (A0-A1). <br />
											2. Приложения для запоминания слов (Anki, Quizlet) с темами для новичков. <br />
											3. Простые видео для детей или обучающие ролики на YouTube (типа «English for Beginners»).
										</p>
										<br />
										<p>
											<b>Главная цель:</b> научиться строить утвердительные, отрицательные и вопросительные предложения
											в настоящем времени.
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

							if (percent >= 30 && percent <= 58) {
								return (
									<div className={styles.resultDescription}>
										<h3>Уровень 2: Элементарный (Elementary)</h3>
										<br />
										<p>
											<b>Примерный навык:</b> Вы понимаете основную суть простых предложений и можете поддержать беседу
											на знакомые темы (о себе, семье, работе), но с большими паузами и ошибками. Есть базовое понимание
											нескольких грамматических времён, но их применение неустойчиво.
										</p>
										<br />
										<p>
											<b>Рекомендация:</b>
											<br />
											<br />
											<b>Укрепляем фундамент:</b> Вам необходимо систематизировать и закрепить базовую грамматику (Past
											Simple, Future Simple, модальные глаголы can/must, конструкции типа would like to). Увеличивайте
											словарный запас
											<br />
											<br />
										</p>
										<p>
											1. Учебники уровня A1-A2 (Headway, English File). <br />
											2. Практикуйте аудирование через короткие диалоги с субтитрами. <br />
											3. Пробуйте читать адаптированную литературу для вашего уровня.
										</p>
										<br />
										<p>
											<b>Главная цель:</b> уверенно использовать 3-4 основных времени и расширить активный словарь до
											1000-1500 слов.
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

							if (percent >= 59 && percent <= 82) {
								return (
									<div className={styles.resultDescription}>
										<h3>Уровень 3: Средний (Intermediate)</h3>
										<br />
										<p>
											<b>Примерный навык:</b> Вы можете понятно выражать свои мысли в большинстве повседневных ситуаций
											(работа, учёба, путешествия). Понимаете основное содержание сложных текстов на знакомые темы.
											Грамотность заметно выросла, но ещё возможны ошибки в сложных конструкциях и выборе слов.
										</p>
										<br />
										<p>
											<b>Рекомендация:</b>
											<br />
											<br />
											<b>Прорыв к свободе общения:</b> Сейчас ключ — практика, практика и ещё раз практика. Сместите
											фокус с изучения правил на их использование.
											<br />
											<br />
										</p>
										<p>
											1. Аудирование: Смотрите сериалы/фильмы на английском с английскими же субтитрами. <br />
											2. Говорение: Найдите разговорного партнёра (Tandem, HelloTalk) или репетитора для регулярных
											бесед. <br />
											3. Грамматика: Проработайте "слабые места" — условные предложения (if), косвенную речь (как в
											вопросе №8,9), пассивный залог.
										</p>
										<br />
										<p>
											<b>Главная цель:</b> преодолеть языковой барьер и начать думать на английском в простых ситуациях.
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

							if (percent >= 83 && percent <= 94) {
								return (
									<div className={styles.resultDescription}>
										<h3>Уровень 4: Выше среднего (Upper-Intermediate)</h3>
										<br />
										<p>
											<b>Примерный навык:</b> Вы уверенно владеете языком в социальной, рабочей и учебной сферах. Можете
											чётко и подробно излагать свои мысли по широкому кругу вопросов, понимаете сложные тексты, включая
											технические по своей специальности. Речь грамотная, ошибки редки и не мешают пониманию.
										</p>
										<br />
										<p>
											<b>Рекомендация:</b>
											<br />
											<br />
											<b>От уверенности к мастерству: </b> Работайте над беглостью, богатством языка и пониманием
											нюансов.
											<br />
											<br />
										</p>
										<p>
											1. Лексика: Учите синонимы, идиомы, фразовые глаголы (как get on из вопроса №10), чтобы звучать
											более естественно. <br />
											2. Контент: Переходите на оригинальный, неадаптированный контент — подкасты, документальные
											фильмы, статьи в The Guardian, BBC, научно-популярные каналы на YouTube. <br />
											3. Письмо: Практикуйте составление сложных текстов (эссе, отчёты, деловые письма).
										</p>
										<br />
										<p>
											<b>Главная цель:</b> достичь уровня, достаточного для работы или учёбы в англоязычной среде.
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

							if (percent >= 95) {
								return (
									<div className={styles.resultDescription}>
										<h3>Уровень 5: Продвинутый (Advanced)</h3>
										<br />
										<p>
											<b>Примерный навык:</b> Свободное владение языком. Вы понимаете практически всё услышанное и
											прочитанное, включая скрытые смыслы и иронию. Можете спонтанно и бегло выражать мысли, точно
											подбирая слова даже в самых сложных ситуациях. Грамматические ошибки минимальны.
										</p>
										<br />
										<p>
											<b>Рекомендация:</b>
											<br />
											<br />
											<b>Поддержание и шлифовка: </b> Ваша задача — не опускаться ниже этого уровня и продолжать
											совершенствоваться в узких областях.
											<br />
											<br />
										</p>
										<p>
											1. Специализация: Углублённое изучение профессиональной лексики, подготовка к международным
											экзаменам (CAE, CPE, IELTS 8.0+), если нужно. <br />
											2. Нюансы: Работа над акцентом, изучение сленга, культурных особенностей разных стран. <br />
											3. Погружение: Используйте английский как инструмент для дальнейшего развития — проходите
											онлайн-курсы по вашей профессии на Coursera/EdX, читайте специализированную литературу, общайтесь
											на конференциях.
										</p>
										<br />
										<p>
											<b>Главная цель:</b> использовать язык на уровне, близком к уровню носителя, для любых
											профессиональных и личных целей.
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

							return <p>Начальный уровень...</p>;
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

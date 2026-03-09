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
							if (answers[6] === 'a') {
								return (
									<div className={styles.resultDescription}>
										<h3>Дизайнер или Frontend-разработчик</h3>
										<br />
										<b>
											<p>🚀 ПЕРСОНАЛИЗИРОВАННАЯ ВЕКТОР ОБУЧЕНИЯ ОТ НАШЕЙ ШКОЛЫ:</p>
										</b>
										<br />
										<b>
											Курс:{' '}
											<a href='/courses/web-development/html-css-moskow' className='accent'>
												Верстка сайтов на HTML и CSS 2 месяца
											</a>
										</b>
										<br />
										<br />
										<p>
											<b>Что получите:</b> Научитесь верстать лендинги, многостраничные сайты, интернет-магазины и
											мобильные приложения. Освоите HTML&CSS с нуля до уровня Junior. Сможете начать фрилансить через 2
											месяца и продолжать развиваться в веб-разработке на курсе Front-end или Full-Stack.
										</p>
										<br />
										<b>
											Курс:{' '}
											<a href='/courses/web-development/javascript-front-end' className='accent'>
												Frontend разработки на javascript
											</a>
										</b>
										<br />
										<br />
										<p>
											<b>Что получите:</b> Освоите профессию с нуля и будете готовы к первой работе уже через 5 месяцев.
											Научитесь создавать крутые интерфейсы для сайтов и приложений на JavaScript. Наполните портфолио 3
											проектами и сможете соревноваться за должность с практиками.
										</p>
										<br />
										<b>
											Курс:{' '}
											<a href='/courses/design/web-design-ui-ux' className='accent'>
												UX&UI Веб-дизайн
											</a>
										</b>
										<br />
										<br />
										<p>
											<b>Что получите:</b> На практике научитесь проектировать удобные и креативные сайты, применяя
											современные технологии веб-дизайна. Освоите необходимые навыки и инструменты, соберете крутое
											портфолио. Сможете с нуля проектировать веб-сайты и мобильные приложения, и претендовать на
											позицию Junior.
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
							if (answers[6] === 'd') {
								return (
									<div className={styles.resultDescription}>
										<h3>Backend Разработчик</h3>
										<br />
										<b>
											<p>🚀 ПЕРСОНАЛИЗИРОВАННАЯ ВЕКТОР ОБУЧЕНИЯ ОТ НАШЕЙ ШКОЛЫ:</p>
										</b>
										<br />
										<b>
											Курс:{' '}
											<a href='/courses/programming/php-junior' className='accent'>
												PHP: обучение Back-end разработке
											</a>
										</b>
										<br />
										<br />
										<p>
											<b>Что получите:</b> Освоите популярнейший язык, лежащий в основе большинства сайтов в интернете.
											Пополните портфолио первыми бизнес-приложениями и коммерческим веб-сайтом. Научитесь поддерживать
											работу сайтов и приложений на PHP, что сделает вас востребованным специалистом после курса.
										</p>
										<br />
										<b>
											Курс:{' '}
											<a href='/courses/programming/c-plus-plus' className='accent'>
												C++ Разработчик
											</a>
										</b>
										<br />
										<br />
										<p>
											<b>Что получите:</b> Изучите один из самых универсальных языков в мире и получите фундаментальные
											знания программиста. Сможете участвовать в разработке сложного высоконагруженного ПО - от видеоигр
											и умных гаджетов, до банковских продуктов и беспилотных дронов. За 4 месяца освоите инструменты
											Junior С++ разработчика и соберете проекты для портфолио.
										</p>
										<br />
										<b>
											Курс:{' '}
											<a href='/courses/programming/java-junior' className='accent'>
												Java Junior Веб-Pазработчик
											</a>
										</b>
										<br />
										<br />
										<p>
											<b>Что получите:</b> Освоите профессию с нуля за 5,5 месяцев. Наполните портфолио мощными
											проектами еще в процессе учебы. Изучите Java-классику и современные фишки (Spring,
											лямбда-выражения, Stream API, микросервисы)
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
							if (answers[6] === 'b') {
								return (
									<div className={styles.resultDescription}>
										<h3>Тестировщик</h3>
										<br />
										<b>
											<p>🚀 ПЕРСОНАЛИЗИРОВАННАЯ ВЕКТОР ОБУЧЕНИЯ ОТ НАШЕЙ ШКОЛЫ:</p>
										</b>
										<br />
										<b>
											Курс:{' '}
											<a href='/courses/testing/testing-qa' className='accent'>
												Тестировщик ПО с нуля
											</a>
										</b>
										<br />
										<br />
										<p>
											<b>Что получите:</b> На практике освоите всё необходимое для должности Junior-тестировщика.
											Найдете первые баги и составите баг-репорт прямо на занятиях.
										</p>
										<br />
										<b>
											Курс:{' '}
											<a href='/courses/testing/qa-avtomation' className='accent'>
												QA Automation Тестирование (Java)
											</a>
										</b>
										<br />
										<br />
										<p>
											<b>Что получите:</b> Научитесь тестировать приложения с нуля. Напишите первые автотесты с
											использованием Java и Selenium прямо на занятиях Освоите актуальные технологии: Jenkins, Selenide,
											Cucumber, CI\CD, Rest-Assured
										</p>
										<br />
										<b>
											Курс:{' '}
											<a href='/courses/testing/qa-pro' className='accent'>
												Тестирование ПО (PRO Версия)
											</a>
										</b>
										<br />
										<br />
										<p>
											<b>Что получите:</b> Углубленный курс мануального и автоматизированного тестирования. Изучите
											передовые методологии тестирования, научитесь создавать эффективные и всесторонние тест-кейсы.
											Сможете автоматизировать ручные тест-кейсы на Java с помощью Selenium. Получите практический опыт
											и будет готовы к трудоустройству уже через 3 месяца.
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
							if (answers[6] === 'c') {
								return (
									<div className={styles.resultDescription}>
										<h3>Маркетолог</h3>
										<br />
										<b>
											<p>🚀 ПЕРСОНАЛИЗИРОВАННАЯ ВЕКТОР ОБУЧЕНИЯ ОТ НАШЕЙ ШКОЛЫ:</p>
										</b>
										<br />
										<b>
											Курс:{' '}
											<a href='/courses/marketing/reklama-ppc' className='accent'>
												Контекстная реклама
											</a>
										</b>
										<br />
										<br />
										<p>
											<b>Что получите:</b> Научитесь настраивать, запускать и анализировать рекламные компании в
											Яндексе. Освоите главные инструменты специалиста по контекстной рекламе и разработаете проект для
											портфолио. Всего через 2 месяца будете полностью готовы к работе по специальности.
										</p>
										<br />
										<b>
											Курс:{' '}
											<a href='/courses/marketing/reklama-vkontakte-telegram' className='accent'>
												Таргетированная реклама
											</a>
										</b>
										<br />
										<br />
										<p>
											<b>Что получите:</b> Научитесь настраивать эффективную таргетированную рекламу в социальных сетях.
											Освоите все доступные в 2025 году площадки и запустите первые рекламные кампании с реальным
											бюджетом. Оформите ваш первый крупный кейс в портфолио и будете готовы брать заказы уже через 1,5
											месяца.
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
							return <p>Уровень не определен, повторите попытку</p>;
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

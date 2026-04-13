import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs'
import styles from '../styles.module.css'
import ViewCounter from '../../components/ViewCounter/ViewCounter'
import LessonPost from '../../components/lesson/lessonPost'

export default function Page() {
	return(
		<div className={styles.page}>
			<div className='container'>
				<Breadcrumbs />
				<section className={styles.post}>
					<div className={styles.header}>
						<div className={styles.left}>
							<div className={styles.info}>
								<div className={styles.date}>
									<img src='/blog/calendar-icon.svg' />
									<p>8 апреля 2026</p>
								</div>
								<ViewCounter slug="kto-takoj-front-end-razrabotchik" initialViews={0} />
							</div>
							<h1 className={styles.title}>Кто такой Front-end разработчик</h1>
							<div className={styles.tabs}>
								<div className={styles.tab}>#Front-end</div>
							</div>
						</div>
						<div className={styles.right}>
							<div className={styles.image}>
								<img src="/blog/kto-takoj-front-end-razrabotchik.svg" alt="Картинка кто такой Front-end разработчик" className={styles.img}/>
							</div>
						</div>
					</div>
					<div className={styles.content}>
						<div className={styles.content_left}>
						<h3 className={styles.subtitle}><span className='accent'>Кто такой Front-end разработчик</span></h3>
						<p className={styles.text}>Front-end разработчик – программист, который создает внешнюю часть сайта или веб-приложения. Он разрабатывает то, с чем вы взаимодействуете, когда выбираете товары в интернет-магазине или изучаете английские слова вpмобильном приложении.</p>
						<p className={styles.text}>Задача фронтенд-разработчика – сделать такую внешнюю часть (интерфейс), чтобы гостю было комфортно пользоваться сайтом или приложением.</p>
						<h3 className={styles.subtitle_text}><span className='accent'>Front-end по слогам</span></h3>
						<p className={styles.text}>Если немного поразмыслить, слово «front» само дает подсказку, что работа фронтенд связана с передовой линией. Говоря образно, Front-end специалист оформляет дом для клиента, в то время как его коллега – Back-end разработчик – строит этот дом. </p>	
						<p className={styles.text}>Кому интересно, есть и универсальный «строитель» – Full-Stack разработчик. Он сам делает и интерфейс, и серверную часть. Фулстек без помощи других специалистов создает сайт или приложение с нуля.</p>
						<h3 className={styles.subtitle_text}><span className='accent'>Инструменты фронт-енд</span></h3>
						<p className={styles.text}>JavaScript – основной язык программирования, которым пользуется Front-end для разработки интерфейса. </p>
						<p className={styles.text}>HTML & CSS – язык разметки и язык описания внешнего вида. Они помогают верстать готовый продукт под разные браузеры и устройства. HTML отвечает за то, что должно находиться на веб-странице, CSS – за то, как информация будет выглядеть.</p>
						<p className={styles.text}>Дополнительно: </p>
						<ul>
							<li>Фреймворки – jQuerty, Angular.js, React.js;</li>
							<li>Back-end (основы) – Node.js, PHP, Ruby, .NET;</li>
							<li>Дебаггинг – Chome Dev Tools, Firebug;</li>
							<li>Контроль версий – Git, GitHub, CVS и прочие;</li>
							<li>Базы данных – SQL, MySQL, NoSQL, MongoDB;</li>
							<li>Графические редакторы – Photoshop;      </li>
							<li>Базовый уровень английского для обработки технических документов.</li>
						</ul>
						<p className={styles.text}>Интересно! Чтобы увидеть код, который написал фронт-енд, кликните правок кнопкой мыши на странице сайта и выберите «Посмотреть код».</p>
						<h3 className={styles.subtitle_text}><span className='accent'>Личные качества Front-end</span></h3>
						<p className={styles.text}>Это не истина в последней инстанции, но будет проще работать фронтенд, если:</p>
						<ul>
							<li>умеете обрабатывать большие объемы информации;</li>
							<li>можете структурировать и анализировать;</li>
							<li>внимательны к деталям;</li>
							<li>креативны и технически подкованы;</li>
							<li>способны эффективно работать в команде;</li>
							<li>готовы постоянно развиваться и учить новое.</li>
						</ul>
						<h3 className={styles.subtitle_text}><span className='accent'>Где искать работу</span></h3>
						<p className={styles.text}>Вас с радостью примут в компаниях по созданию сайтов, веб-приложений и мобильных приложений. Кстати, недавно у нас вышла статья, где программисту искать работу в Америке: если нацелены на заграницу, обязательно загляните. </p>
						<h3 className={styles.subtitle_text}><span className='accent'>Карьерный путь Front-end</span></h3>
						<p className={styles.text}>Чего можно достичь, работая фронт-енд? Ниже собрали должности, которые вы можете занять.</p>
						<ol>
							<li>Младший Front-end;</li>
							<li>Front-end разработчик;</li>
							<li>Старший Front-end;</li>
							<li>Руководитель группы разработчиков;</li>
							<li>Менеджер проектов;</li>
							<li>Руководитель отдела разработки;</li>
							<li>IT-директор</li>
						</ol>
						<h3 className={styles.subtitle_text}><span className='accent'>Как новичку стать Front-end</span></h3>
						<p className={styles.text}>Самый быстрый и надежный способ – пойти на очные курсы. Вместе с небольшой группой новичков и практикующим преподавателем учиться проще.</p>
						<p className={styles.text}>Также можно получить базовые навыки фронтенд в университете, но после обычно приходится доучиваться.</p>
						<p className={styles.text}>Некоторые выбирают самостоятельное обучение профессии по видеоурокам на YouTube и других платформах. Такой способ тоже неплох, но займет больше времени, чем курсы плюс не гарантирует результат</p>
						</div>
						<div className={styles.content_right}>
							<LessonPost lesson='Front-end'/>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}
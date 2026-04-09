'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import styles from './BlogTabs.module.css';
import { posts } from '@/app/blog/model';
import PostGroup from '../posts/postsGroup/PostGroup';

export default function BlogTabs() {
	const [activeTab, setActiveTab] = useState('Все статьи');

	// Derive unique categories from posts and add 'Все статьи' at the beginning
	const categories = ['Все статьи', ...Array.from(new Set(posts.map((post) => post.category)))];

	return (
		<>
			{/* Динамический заголовок */}
			<div className={styles.blog_title}>
				{activeTab === 'Все статьи' ? (
					<h1><span className="accent">Статьи</span> нашего блога</h1>
				) : (
					<h1>Подборка статей на тему <span className="accent">#{activeTab}</span></h1>
				)}
			</div>

			<Tabs.Root value={activeTab} onValueChange={setActiveTab}>
				<Tabs.List className={styles.tabsList}>
					{categories.map((category) => (
						<Tabs.Trigger key={category} value={category} className={styles.category}>
							{category}
						</Tabs.Trigger>
					))}
				</Tabs.List>

				{categories.map((category) => (
					<Tabs.Content key={category} value={category} className={styles.tabContent}>
						<PostGroup 
							posts={category === 'Все статьи' 
								? posts 
								: posts.filter((post) => post.category === category)
							} 
						/>
					</Tabs.Content>
				))}
			</Tabs.Root>
		</>
	);
}

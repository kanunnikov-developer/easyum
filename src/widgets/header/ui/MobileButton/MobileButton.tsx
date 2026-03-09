'use client';

import Image from 'next/image';
import { useState } from 'react';
import MobileModal from '../Modal/MobileModal/MobileModal';

export default function MobileButton() {
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => setIsOpen(false);
	return (
		<>
			<div onClick={() => setIsOpen(true)}>
				<Image src='/icons/burger.svg' alt='Burger' width={35} height={35} />
			</div>

			{isOpen && <MobileModal isOpen={isOpen} onClose={handleClose} />}
		</>
	);
}

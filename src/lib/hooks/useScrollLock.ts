import { useEffect } from 'react';

/**
 * Hook to lock body scroll when a modal is open.
 * Useful for preventing "background scroll" on mobile and desktop.
 * @param lock - Whether to lock the scroll
 */
export const useScrollLock = (lock: boolean) => {
	useEffect(() => {
		if (!lock) return;

		// Save current scroll position and calculation of scrollbar width
		const scrollY = window.scrollY;
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		
		// Save original styles to restore them later
		const originalOverflow = document.body.style.overflow;
		const originalHtmlOverflow = document.documentElement.style.overflow;
		const originalPosition = document.body.style.position;
		const originalTop = document.body.style.top;
		const originalWidth = document.body.style.width;
		const originalPaddingRight = document.body.style.paddingRight;

		// Lock scroll
		document.documentElement.style.overflow = 'hidden';
		document.body.style.overflow = 'hidden';
		document.body.style.position = 'fixed';
		document.body.style.top = `-${scrollY}px`;
		document.body.style.width = '100%';
		
		// Prevent layout shift if there was a scrollbar
		if (scrollbarWidth > 0) {
			document.body.style.paddingRight = `${scrollbarWidth}px`;
		}

		return () => {
			// Save current scroll behavior
			const originalScrollBehavior = document.documentElement.style.scrollBehavior;
			// Disable smooth scroll for instant restoration
			document.documentElement.style.scrollBehavior = 'auto';

			// Restore styles
			document.documentElement.style.overflow = originalHtmlOverflow;
			document.body.style.overflow = originalOverflow;
			document.body.style.position = originalPosition;
			document.body.style.top = originalTop;
			document.body.style.width = originalWidth;
			document.body.style.paddingRight = originalPaddingRight;
			
			// Scroll back to saved position instantly
			window.scrollTo(0, scrollY);

			// Restore original scroll behavior
			document.documentElement.style.scrollBehavior = originalScrollBehavior;
		};
	}, [lock]);
};

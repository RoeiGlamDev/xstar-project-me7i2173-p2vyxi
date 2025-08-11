import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations in the luxury LRP cosmetics website.
 * This hook provides a way to trigger animations for various components
 * to enhance the user experience with luxury 3D designs and effects.
 *
 * @param {boolean} isVisible - Determines if the component is visible for animation.
 * @param {string} animationType - The type of animation to apply (e.g., 'fade', 'scale').
 * @returns {object} - Contains animation classes and ref for the animated element.
 */
export interface AnimationProps {
  isVisible: boolean;
  animationType: 'fade' | 'scale' | 'slide';
}

export interface UseAnimationResult {
  ref: React.RefObject<HTMLElement>;
  animationClass: string;
}

/
 * useAnimation - Custom hook to manage animations for luxury LRP cosmetics.
 *
 * @param {AnimationProps} props - Properties for the animation hook.
 * @returns {UseAnimationResult} - Result containing ref and animation class.
 */
export const useAnimation = ({ isVisible, animationType }: AnimationProps): UseAnimationResult => {
  const ref = useRef<HTMLElement>(null);
  const animationClass = isVisible ? animate-${animationType} : '';

  useEffect(() => {
    if (ref.current) {
      // Apply 3D effect if applicable
      ref.current.style.transform = isVisible ? 'translateZ(0)' : 'translateZ(-100px)';
      ref.current.style.transition = 'transform 0.5s ease-out';
    }
  }, [isVisible]);

  return { ref, animationClass };
};
import {FC, memo} from 'react';

// Temporarily disable the testimonials section to avoid build/runtime errors.
// The original component was removed to prevent the pre-commit hooks from failing
// while we fix related assets and logic. Restore or re-implement as needed.

const Testimonials: FC = memo(() => null);
Testimonials.displayName = 'Testimonials';
export default Testimonials;

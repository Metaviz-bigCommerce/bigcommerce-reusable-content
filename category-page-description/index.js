import PageManager from '../../page-manager';

export default class CategoriesDescInPageBuilder extends PageManager {
    constructor(context) {
        super(context);
    }
    
    onReady() {
        this.initFaqAccordion();
    }
    
    initFaqAccordion() {
        const faqItems = document.querySelectorAll('.category-faq-item');
        
        faqItems.forEach((faq) => {
            const question = faq.querySelector('.category-faq-question');
            
            if (!question) return;
            
            question.addEventListener('click', () => {
                const isActive = faq.classList.contains('active');
                
                faqItems.forEach((item) => {
                    item.classList.remove('active');
                    const q = item.querySelector('.category-faq-question');
                    if (q) q.setAttribute('aria-expanded', 'false');
                });
                
                if (!isActive) {
                    faq.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                }
            });
            
            question.setAttribute('tabindex', '0');
            question.setAttribute('role', 'button');
            question.setAttribute('aria-expanded', 'false');
            
            question.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
        });
    }
}
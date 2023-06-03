import daniel from '../assets/testimonial/image-daniel.jpg';
import jonathan from '../assets/testimonial/image-jonathan.jpg';
import jeanette from '../assets/testimonial/image-jeanette.jpg';
import patrick from '../assets/testimonial/image-patrick.jpg';
import kira from '../assets/testimonial/image-kira.jpg';

const evangelismTestimonials = [
  {
    styles:
      'testimonial grid-col-span-2 flow bg-neutral-100 quote text-secondary-400',
    information: {
      image: daniel,
      className: '',
      name: 'Daniel Cliffor',
      positions: 'Verified Graduate',
      testimonials_main:
        'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
      testimonials_body:
        '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”',
    },
  },
  {
    styles: 'testimonial flow bg-secondary-400 text-neutral-100',
    information: {
      image: jonathan,
      className: '',
      name: 'Jonathan Walters',
      positions: 'Verified Graduate',
      testimonials_main: 'The team was very supportive and kept me motivated',
      testimonials_body:
        '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”',
    },
  },
  {
    styles: 'testimonial flow bg-neutral-100 text-secondary-400',
    information: {
      image: jeanette,
      className: '',
      name: 'Jeanette Harmon',
      positions: 'Verified Graduate',
      testimonials_main: 'An overall wonderful and rewarding experience',
      testimonials_body:
        '“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”',
    },
  },
  {
    styles:
      'testimonial grid-col-span-2 flow bg-secondary-500 text-neutral-100',
    information: {
      image: patrick,
      className: 'border-primary-400',
      name: 'Patrick Abrams',
      positions: 'Verified Graduate',
      testimonials_main:
        'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
      testimonials_body:
        '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”',
    },
  },
  {
    styles: 'testimonial flow bg-neutral-100 text-secondary-400',
    information: {
      image: kira,
      className: '',
      name: 'Kira Whittle',
      positions: 'Verified Graduate',
      testimonials_main: 'Such a life-changing experience. Highly recommended!',
      testimonials_body:
        '“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”',
    },
  },
];

export default evangelismTestimonials;

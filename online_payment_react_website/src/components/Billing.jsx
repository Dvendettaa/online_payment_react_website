import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import {} from '../Aos.js';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img data-aos={"fade-right"} src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />

      {/* gradient end */}
    </div>

    <div data-aos={"fade-right"} className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
        How much money do you leave on the table each month? Too many businesses “forget”
        to bill all hours worked. With HooBank, you can keep track of any invoices, generate
        them more quickly and bill any type of pricing structure to meet clients’ needs.
        As a bonus, you can explore new pricing models and compare their viability.
        Stop the revenue leakage and scale your business at full speed!<br/><br/><br/>

        Cash is king, so get it in the bank sooner!
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;

import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import {} from '../Aos.js';

const CardDeal = () => (
  <section className={layout.section}>
    <div data-aos={"fade-left"} className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} hiddenTrans`}>
        Find a better card deal <br className="sm:block" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[590px] mt-5 hiddenTrans `}>
        ->  Choose the billing type that suits your needs<br/>
        ->  Don’t double entry, interconnect to your accounting system<br/>
        ->  Speed up month-end closing with a rigorous invoicing process<br/>
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img data-aos={"fade-left"} src={card} alt="billing" className="w-[100%] h-[100%] hiddenTrans " />
    </div>
  </section>
);

export default CardDeal;

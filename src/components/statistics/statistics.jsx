import PropTypes from "prop-types";
import {Stat} from "./stat/stat";
import css from "./statistics.module.css"
export const Statistics =({stats})=>{
 return(
     <section className={css.statisticSection}>
       {/* Как сделать тайтл необязательным и не сломать что-то я так и не понял , хел плиз */}
       <h2>Upload stats</h2>
         <ul>
           {stats.map(({label,percentage})=>(
              <Stat 
                key={label}
                label={label}
                percentage={percentage}
              />
            ))}
         </ul>
     </section>
      
 );
};

 Stat.propTypes = {
            label: PropTypes.string.isRequired,
            percentage: PropTypes.string.isRequired    
 }
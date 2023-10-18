import  { useState, useEffect } from 'react';
import { format, addDays, getDay } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function SelectDateReady(props) {
  const setDateRacquetReady = props.setDateRacquetReady;


  const [dateOrigin, setDateOrigin] = useState(new Date());
  const [dateByDefault, setDateByDefaul] = useState(new Date());
  const [dateShorter, setdateShorter] = useState(new Date());
  const [dateLonger, setdateLonger] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Obtenez la date actuelle
    const today = new Date();
    
    // Vérifiez si today est un dimanche (0), et si oui, ajoutez un jour à dateOrigin
    if (getDay(today) === 0) {
      setDateOrigin(addDays(today, 1));
    } else {
      setDateOrigin(today);
    }
    // Ajoutez 3 jours à la date de depart
    const dateRacquetOK = addDays(dateOrigin, 3);

    // Vérifiez si dateRacquetOK est un dimanche (0) ou un lundi (1), et si oui, repoussez au mardi
    const dayOfWeek = getDay(dateRacquetOK);
    if (dayOfWeek === 0) {
      dateRacquetOK.setDate(dateRacquetOK.getDate() + 2); // Repousser au mardi
    } else if (dayOfWeek === 1) {
      dateRacquetOK.setDate(dateRacquetOK.getDate() + 1); // Repousser au mardi
    }
    // Formatez la nouvelle date
    const formattedDateRacquetOk = format(dateRacquetOK, 'EEEE d MMMM', { locale: fr });

    // Mettez à jour setDateRacquetReady avec la nouvelle date
    setDateByDefaul(dateRacquetOK);
    setDateRacquetReady(formattedDateRacquetOk);
    




    // Ajoutez 2 jours à la date de depart
    const dateRacquetOkFaster = addDays(dateOrigin, 2);
    // Vérifiez si dateRacquetOK est un dimanche (0) ou un lundi (1), et si oui, repoussez au mardi
    const dayOfWeekFaster = getDay(dateRacquetOkFaster);
    if (dayOfWeekFaster === 0) {
      dateRacquetOkFaster.setDate(dateRacquetOkFaster.getDate() + 2); // Repousser au mardi
    } else if (dayOfWeekFaster === 1) {
      dateRacquetOkFaster.setDate(dateRacquetOkFaster.getDate() + 1); // Repousser au mardi
    }
    // Mettez à jour setDateRacquetReady avec la nouvelle date
    setdateShorter(dateRacquetOkFaster);

    // Ajoutez 4 jours à la date de depart
    const dateRacquetOkLonger = addDays(dateOrigin, 4);
    // Vérifiez si dateRacquetOKLonger est un dimanche (0) ou un lundi (1), et si oui, repoussez au mardi
    const dayOfWeekLonger = getDay(dateRacquetOkLonger);
    if (dayOfWeekLonger === 0) {
      dateRacquetOkLonger.setDate(dateRacquetOkLonger.getDate() + 2); // Repousser au mardi
    } else if (dayOfWeekLonger === 1) {
      dateRacquetOkLonger.setDate(dateRacquetOkLonger.getDate() + 1); // Repousser au mardi
    }
    // Mettez à jour setDateRacquetReady avec la nouvelle date
    setdateLonger(dateRacquetOkLonger);





  }, []);


  const handleDayChange = (data) => {
    setDateRacquetReady(format(data, 'EEEE d MMMM', { locale: fr }))
  };



  return (
    <div
      className="clubSelect__wrapper"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="clubSelect__bar-wrapper">
        <div className="clubSelect__bar-title">Modifier le délai</div>
        <span className={`clubSelect__arrow ${isOpen ? "clubSelect__arrow-up" : "clubSelect__arrow-down"}`} />
      </div>

      {isOpen && (
        <div className="clubSelect__submenu-contenair">
          <ul className='clubSelect__submenu-ul'>
            <li
              key="faster"
              className="clubSelect__submenu-li"
              onClick={() => handleDayChange(dateShorter)}
            >
              {format( dateShorter, 'EEEE d MMMM', { locale: fr })}
            </li>
            <li
              key="standard"
              className="clubSelect__submenu-li"
              onClick={() => handleDayChange(dateByDefault)}
            >
              {format( dateByDefault, 'EEEE d MMMM', { locale: fr })}
            </li>

            <li
              key="longer"
              className="clubSelect__submenu-li"
              onClick={() => handleDayChange(dateLonger)}
            >
              {format( dateLonger, 'EEEE d MMMM', { locale: fr })}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}




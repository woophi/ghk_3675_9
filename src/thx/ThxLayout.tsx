import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Typography } from '@alfalab/core-components/typography';
import rocket from '../assets/rocket.png';
import { appSt } from '../style.css.ts';
import { thxSt } from './style.css';

export const ThxLayout = () => {
  return (
    <>
      <div className={thxSt.container}>
        <img alt="Картинка ракеты" src={rocket} width={135} className={thxSt.rocket} />
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Мы проводим исследование для нового сервиса. Скоро расскажем о нём подробнее, следите за новостями! А пока можете
          ознакомиться со стандартными условиями.
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          href="alfabank://multistep-route?fromModule=FORM&stepNumber=0&alias=alfa-subscription-alias&version=2&source=ghzpclient"
        >
          Узнать условия
        </ButtonMobile>
      </div>
    </>
  );
};

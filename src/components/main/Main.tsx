import { Title } from 'components/title/Title';
import s from './Main.module.scss';

export const Main = () => {
  return (
    <div className={s.main}>
      <Title level={1} text={'Todo List'}/>
    </div>
  )
}

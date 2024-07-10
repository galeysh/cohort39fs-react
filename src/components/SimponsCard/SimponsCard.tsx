import {SimposonsCardProps} from './types';
import "./styles.css";

// Комаоненты, как и обычные функции могут принимать аргументы
// Но может принимать в себя только 1 аргумент - это ОБЬЕКТ!!!
// Этот объект называется props
// По умолчанию props - пустой объект, если вы в него ничего не передаете
// function SimponsCard({ simpsonData }: SimposonsCardProps) {
  // const {avatar, firstName, lastName, job, hobby} = simpsonData;
  function SimponsCard({ avatar, firstName, lastName, job, hobby }: SimposonsCardProps) {
  
  return (
    <div className="card-wrapper">
      <img className="avatar" src={avatar} alt="Avatar" />
      <p className="card-item">Full name: {`${firstName} ${lastName}`}</p>
      <p className="card-item">Job: {job}</p>
      <p className="card-item">Hobby: {hobby}</p>
    </div>
  );
}

export default SimponsCard;

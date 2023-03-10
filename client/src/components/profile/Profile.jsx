import React, { useContext, useState } from 'react';
import './profile.css'
import TeamForm from '../teamForm';
import WellForm from '../WellForm';
import DocumentForm from '../DocumentForm';
import { RoleContext } from '../Header';
import { NameContext } from '../Header';
import wellImage from '../../images/well.svg';
import usersIcon from '../../images/usersicon.svg';
import documentIcon from '../../images/document.svg';
import SidePopup from '../../UI/sidePopup/SidePopup';
import WellsList from '../wellsList/WellsList';
import TeamList from '../teamList/TeamList';
import DocumentsList from '../documentsList/DocumentsList';

const Profile = ({active, setActive, logout}) => {
  const [wellsActive, setWellsActive] = useState(false);
  const [teamActive, setTeamActive] = useState(false);
  const [documentsActive, setDocumentsActive] = useState(false);

  const role = useContext(RoleContext);
  const name = useContext(NameContext);

  function openWellsList() {
    setTeamActive(false);
    setDocumentsActive(false);
    setWellsActive(!wellsActive);
  }

  function openTeam() {
    setWellsActive(false);
    setDocumentsActive(false);
    setTeamActive(!teamActive);
  }

  function openDocumentsList() {
    setWellsActive(false);
    setTeamActive(false);
    setDocumentsActive(!documentsActive);
  }

  function logoutFunc() {
    window.location.reload()
    logout();
    setActive(false);
  }

  return (
    <div className={active ? 'profile active' : 'profile'}>
      <div className="profile__content">
        <div className='top'>
          <input placeholder="Search" className='search' type="text" />
          <div className="menu">
            <div className="menu__item">
              <div className="menu__info">
                <img src={wellImage} alt="Скважина" />
                {role == 'developer' || role == 'admin + developer'
                ?
                <button className='menu__title' onClick={openWellsList}>Скважины</button>
                :
                <h3 className='menu__title'>Скважины</h3>
                }
              </div>
              {role == 'developer' || role == 'admin + developer'
              ?
              <WellForm/>
              :
              <></>
              }
            </div>

            <div className="menu__item">
              <div className="menu__info">
                <img src={usersIcon} alt="Команда" />
                {role == 'admin' || role == 'admin + developer'
                ?
                <button className='menu__title' onClick={openTeam}>Команда</button>
                :
                <h3 className='menu__title'>Команда</h3>
                }
              </div>
              {role == 'admin' || role == 'admin + developer'
              ?
              <TeamForm/>
              :
              <></>
              }
            </div>

            <div className="menu__item">
              <div className="menu__info">
                <img src={documentIcon} alt="Отчеты" />
                {role == 'admin' || role == 'admin + developer'
                ?
                <button className='menu__title' onClick={openDocumentsList}>Отчеты</button>
                :
                <h3 className='menu__title'>Отчеты</h3>
                }
              </div>
              {role == 'admin' || role == 'admin + developer' || role == 'developer' || role == 'user'
              ?
              <DocumentForm/>
              :
              <></>
              }
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='info'>
          <h3 className='name'>{name}</h3>
            <p className='role'>{role}</p>
          </div>
          <button onClick={logoutFunc}>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0H0V16H16V0Z" fill="white" fillOpacity="0.01"/>
              <path d="M7.99723 2H2V14H8" stroke="#ADADAD" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 11L14 8L11 5" stroke="#ADADAD" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.33333 7.99724H14" stroke="#ADADAD" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <SidePopup active={wellsActive} setActive={setWellsActive}>
          <WellsList/>
        </SidePopup>
        <SidePopup active={teamActive} setActive={setTeamActive}>
          <TeamList/>
        </SidePopup>
        <SidePopup active={documentsActive} setActive={setDocumentsActive}>
          <DocumentsList/>
        </SidePopup>
      </div>
    </div>
  )
}

export default Profile;
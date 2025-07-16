import React from 'react'
import 
{BsMusicNoteBeamed , BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from "react-icons/bs"
import { useTranslation } from 'react-i18next'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  const { t } = useTranslation();

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsMusicNoteBeamed  className='icon_header'/> {t('music')}
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> {t('dashboard')}
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> {t('setting')}
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar

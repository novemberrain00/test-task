import './sass/style.sass';

import tippy from 'tippy.js';
import Chart from 'chart.js/auto';
import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-basic.css";

import Dots from './images/dots.svg';
import DotsWhite from './images/dots-white.svg';
import DotsActive from './images/dots-active.svg';
import BurgerIcon from './images/burger.svg';
import BurgerIconActive from './images/burger-active.svg';
import QuestionImg from './images/question.svg';
import QuestionImgActive from './images/question-active.svg';
import ProfileImg from './images/profile.svg';
import ProfileImgActive from './images/profile-active.svg';
import LogoutImg from './images/logout.svg';
import LogoutImgActive from './images/logout-active.svg';
import EditImg from './images/edit.svg';
import EditImgActive from './images/edit-active.svg';
import TrashImg from './images/trash.svg';
import TrashImgActive from './images/trash-active.svg';
import OptionsImg from './images/options.svg';
import OptionsImgActive from './images/options-active.svg';
import RepeatImg from './images/repeat.svg';
import RepeatImgActive from './images/repeat-active.svg';


(async function() {
  const data = [
    { name: 'Александа (55%)', count: 55 },
    { name: 'Владимир (5%)', count: 5 },
    { name: 'Тимур (10%)', count: 10 },
    { name: 'Ангелина Сейт (20%)', count: 20 },
    { name: 'Денис (10%)', count: 10 },
    
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'doughnut',
      data: {
        labels: data.map(row => row.name),
        datasets: [
          {
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();

const dropdownBlocks = document.querySelectorAll('.dropdown');

dropdownBlocks.forEach(ddblock => {
  const menu = ddblock.querySelector('.dropdown__menu');

  ddblock.querySelector('.dropdown__opener').addEventListener('click', () => {
    //ddblock.querySelector('img.dots-icon').setAttribute('src', DotsActive);
    menu.classList.toggle('dropdown__menu_active');
  });

  // ddblock.addEventListener('mouseout', () => {
  //   //ddblock.querySelector('img.dots-icon').setAttribute('src', DotsImg);
  //   menu.classList.remove('dropdown__menu_active');
  // });
});

const periodSelectors = document.querySelectorAll('.calendar-period-selector'),
  periodMenus = document.querySelectorAll('.calendar-period-menu');

periodMenus.forEach((menu, i) => {
  menu.querySelectorAll('.dropdown__link').forEach(link => {
    link.addEventListener('click', e => {
      periodSelectors[i].textContent = e.target.textContent;
      menu.parentNode.classList.remove('dropdown__menu_active');
    });
  });
});

tippy('.refresh-icon', {
  content: '<div class="alert alert_tiny">Обновить данные</strong>',
  allowHTML: true,
});

tippy('.scale-icon', {
  content: '<div class="alert alert_tiny">Растянуть</strong>',
  allowHTML: true,
});

// tippy('.dropdown__opener', {
//   content: '<div class="dropdown__menu"><ul>
//     <li><a href="#">DropDown Menu Item 1</a></li>
//     <li><a href="#">DropDown Menu Item 2</a></li>
//     <li><a href="#">DropDown Menu Item 3</a></li>
//     <li><a href="#">DropDown Menu Item 4</a></li>
//   </ul>
// </div>',
//   allowHTML: true,
// });


const alertOpeners = document.querySelectorAll('.alert-opener'),
  modalsBlock = document.querySelector('.modals'),
  modalClosers = document.querySelectorAll('.modal-closer'),
  alertModal = document.querySelector('.alert-modal');

alertOpeners.forEach(opener => {
  opener.addEventListener('click', () => {
    modalsBlock.classList.add('modals_active');

    document.addEventListener('click', e => {
      if(e.target === modalsBlock && e.target !== alertModal) {
        modalsBlock.classList.remove('modals_active');
      }
    });
  });
});


modalClosers.forEach(closer => {
  closer.addEventListener('click', e => {
    modalsBlock.classList.remove('modals_active');
  });
});

const helpOpener = document.querySelector('.help__opener'),
  helpCloser = document.querySelector('.help__closer'),
  helpBlock = document.querySelector('.help__block');

helpOpener.addEventListener('click', () => {
  helpBlock.classList.add('help__block_active');
});

helpCloser.addEventListener('click', () => {
  helpBlock.classList.remove('help__block_active');
});

const subheaderMenu = document.querySelector('.subheader__menu'),
  subheaderInfo = document.querySelector('.subheader__info'),
  subheaderMenuOpener = document.querySelector('.subheader-menu-opener'),
  subheaderHelper = document.querySelector('.subheader__helper');

subheaderMenuOpener.addEventListener('click', () => {
  subheaderInfo.classList.toggle('subheader__info_active');
  subheaderHelper.classList.toggle('subheader__helper_active');
  subheaderMenu.classList.toggle('subheader__menu_active');
}); 

new Calendar({
  id: "#calendar-1",
  calendarSize: "small",
});

new Calendar({
  id: "#calendar-2",
  calendarSize: "small",
});

document.querySelectorAll('.calendar-opener').forEach((opener, i) => {
  opener.addEventListener('click', () => {
    document.querySelectorAll('.calendar')[i].classList.toggle('calendar_active');
  });
});


const changeIcon = (selector, initial, active) => {
  document.querySelectorAll(selector).forEach((icon, i) => {
    icon.addEventListener('mouseover', () => {
      icon.setAttribute('src', active);
    });

    icon.addEventListener('mouseout', () => {
      icon.setAttribute('src', initial);
    });
  });
}

changeIcon('.dots-icon', Dots, DotsActive);
changeIcon('.dots-icon-white', DotsWhite, DotsActive);
changeIcon('.question-icon', QuestionImg, QuestionImgActive);
//changeIcon('.burger-icon', BurgerIcon, BurgerIconActive);

const menuChangeIcon = (selector, initial, active) => {
  document.querySelectorAll(selector).forEach(item => {
    item.parentNode.addEventListener('mouseover', () => {
      item.setAttribute('src', active);
    });
  });

  document.querySelectorAll(selector).forEach(item => {
    item.parentNode.addEventListener('mouseout', () => {
      item.setAttribute('src', initial);
    });
  });
}

menuChangeIcon('.profile-icon', ProfileImg, ProfileImgActive);
menuChangeIcon('.logout-icon', LogoutImg, LogoutImgActive);
menuChangeIcon('.edit-icon', EditImg, EditImgActive);
menuChangeIcon('.trash-icon', TrashImg, TrashImgActive);
menuChangeIcon('.options-icon', OptionsImg, OptionsImgActive);
menuChangeIcon('.repeat-icon', RepeatImg, RepeatImgActive);

const dealsOpener = document.querySelector('.deals-opener'),
  dealsCloser = document.querySelector('.sidebar__deals-closer'),
  sidebarDeals = document.querySelector('.sidebar__deals');

dealsOpener.addEventListener('click', () => {
  sidebarDeals.classList.add('sidebar__deals_active')
});

dealsCloser.addEventListener('click', () => {
  sidebarDeals.classList.remove('sidebar__deals_active')
});

const sidebarOpening = () => {
  document.querySelector('.deals-opener').addEventListener('mouseover', () => {
      document.querySelector('.deals-opener').style.backgroundColor = '#273142';
      document.querySelector('.deals-opener img').setAttribute('src', BurgerIconActive);
  });

  document.querySelector('.deals-opener').addEventListener('click', () => {
    document.querySelector('.deals-opener').style.backgroundColor = '#273142';
    document.querySelector('.deals-opener img').setAttribute('src', BurgerIconActive);
  });

  dealsCloser.addEventListener('click', () => {
    document.querySelector('.deals-opener').style.backgroundColor = 'transparent';
    document.querySelector('.deals-opener img').setAttribute('src', BurgerIcon);
  });

  document.querySelector('.deals-opener').addEventListener('mouseout', () => {
    if(!sidebarDeals.classList.contains('sidebar__deals_active')) {
      document.querySelector('.deals-opener').style.backgroundColor = 'transparent';
      document.querySelector('.deals-opener img').setAttribute('src', BurgerIcon);
    }
  });
};

sidebarOpening();

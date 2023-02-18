import React from 'react';
import { Group, Panel, PanelHeader, Button, View, CardGrid, Headline, SimpleCell, Card, ChipsInput, Input, FormItem, FormLayoutGroup,
} from '@vkontakte/vkui';
// import Icon36Done from '@vkontakte/icons/dist/36/done';
import { useTranslations } from '../../../hooks';
import HomePNFT from '../Views/HomePNFT.jsx'


const InstallView = (props) => {
  const [t] = useTranslations();
  const { id, activePanel, history } = props;

  return (
    <div>
        <PanelHeader role="heading">{t('page.install.header')}</PanelHeader>
        <HomePNFT />
        <HomePNFT />
        <HomePNFT />
    </div>
  );
};

export default InstallView;

// {t('page.install.description')}

// <ContentCard
//     onClick={() => {
//     }}
//     src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
//     subtitle="NFT-Title"
//     header="Описание1"
//     text="Описание2"
//     caption="Подпись фото"
//     maxHeight={150}
// />}

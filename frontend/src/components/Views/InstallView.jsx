import React from 'react';
import {
  Group, Panel, PanelHeader, Button, View, Div,
} from '@vkontakte/vkui';
import { useTranslations } from '../../../hooks';

const InstallView = (props) => {
  const [t] = useTranslations();
  const { id, activePanel, history } = props;

  return (
    <View {...{ id, activePanel, history }}>
      <Panel id={activePanel}>
        <PanelHeader role="heading">{t('page.install.header')}</PanelHeader>

      </Panel>
    </View>
  );
};

export default InstallView;

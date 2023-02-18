import React from 'react';
import { Group, Panel, PanelHeader, Button, View, CardGrid, Headline, SimpleCell, Card, ChipsInput, Input, FormItem, FormLayoutGroup,
} from '@vkontakte/vkui';
// import Icon36Done from '@vkontakte/icons/dist/36/done';
import { useTranslations } from '../../../hooks';


const HomePNFT = (props) => {
    const [t] = useTranslations();
    const { id, activePanel, history } = props;

    return (
        <View {...{ id, activePanel, history }}>
            <Panel id={activePanel}>
                <Group mode="plain">
                    {/*<div className="h3 text-center" style={{ padding: 20 }}>*/}
                    {/*    <Headline level="2" weight="1" style={{ marginBottom: 10 }}>*/}
                    {/*        NFTs*/}
                    {/*    </Headline>*/}
                    {/*</div>*/}
                    <CardGrid size="l">
                        <Card mode="shadow">
                            <SimpleCell before={<img style={{ height: 120, width: 120, marginRight: 10, borderRadius: 20}} src={('https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')} />} description="Большое описание события...............">
                                <h4>Концерт Евгений Онегин</h4>
                                <h5>16+ Концерт</h5>
                                <FormLayoutGroup mode="horizontal">
                                    <FormItem top="Дата концерта">
                                        <Input type ='date'/>
                                    </FormItem>
                                    <FormItem top="Время концерта">
                                        <Input type ='time'/>
                                    </FormItem>
                                    <FormItem top="Адрес концерта">
                                        <ChipsInput placeholder="Введите адрес" />
                                    </FormItem>
                                </FormLayoutGroup>
                            </SimpleCell>
                            <Button style={{
                                marginLeft: 140,
                                marginBottom: 10,
                            }}>
                                Купить билет
                            </Button>
                        </Card>
                    </CardGrid>
                </Group>
            </Panel>
        </View>
    );
};

export default HomePNFT;

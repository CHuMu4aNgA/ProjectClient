import { YMaps, Map } from '@pbe/react-yandex-maps'
import cls from './YandexMap.module.scss'

export const YandexMap = () => {
    const defaultState = {
        center: [64.5401, 40.5433],
        zoom: 13,
    }

    return (
        <div className={cls.ymaps}>
            <YMaps query={{ apikey: 'd1f29237-f085-46b7-bb49-d17e37b7d766'}}>
                <Map style={{width: '100%', height: '70vh'}} defaultState={defaultState} />
            </YMaps>
        </div>
    )
}

import { Button, buttonType } from '../../'
import { classNames } from '../../../utils/classNames'
import cls from './BurgerButton.module.scss'


export const BurgerButton = ({toggleMenu, toggleBurgerMenu}) => {
    const modsActive = {
        [cls.active]: 'active'
    }

    return (
        <Button
            className={classNames(cls.burder, toggleMenu ? modsActive : {})}
            onClick={toggleBurgerMenu}
            variant={buttonType.CLEAR}
        >
            <span className={cls.burderLine}></span>
            <span className={cls.burderLine}></span>
            <span className={cls.burderLine}></span>
        </Button>
    )
}



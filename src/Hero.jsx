import './styles/Hero.scss';
export default () => {
    return (
        <div className='Hero container'>
            <div className='Hero_content'>
                <div className='Hero_header'>
                    Батареї для електротранспорту та автономних систем
                </div>
                <div className='Hero_description'>
                    Корпус - легкозйомний, герметичний, розбірний, з броньованої сталі
                </div>
                <div className='Hero_description'>
                    Температурний контроль на Ардуіно. Зарядка взимку без проблем
                </div>
                <div className='Hero_description'>
                    Контроль заряду через застосунок
                </div>
                <div className='Hero_description'>
                    Універсальний форм-фактор: підходить для скутера, велосипеда, мотоцикла, інвалідного візка, автомобіля та павербанка
                </div>
                <div className='Hero_description'>

                    Повний сервіс: продаж, обслуговування, прокат, консультації, розробки, кастом, серія, утилізація.
                </div>

                <div className='Hero_cta'>
                    200 $ за 1 кВт⋅год
                </div>
            </div>
            <div className='Hero_decor'></div>
        </div >
    )
}
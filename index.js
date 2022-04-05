//Запуск бота nodemon index.js/npm run dev

const TelegramApi = require('node-telegram-bot-api')

const token = '2016342944:AAEIoCcJ8jD5LqKmpuGF9h7Fwz2juPi2Ovs'

const bot = new TelegramApi(token, {polling: true})


//__________________________Клавиатура основного меню_____________________
const MenuNavigation = {
    reply_markup: JSON.stringify({
        inline_keyboard: [  
            [{text:'Жилищные отношения', url: 'https://dionoyabrsk.yanao.ru/activity/3667/'},
                {text:'Земельные отношения', url: 'https://dionoyabrsk.yanao.ru/activity/10075/'}],  
            [{text:'Имущественные отношения', url: 'https://dionoyabrsk.yanao.ru/activity/3673/'}, 
                {text:'Контакты', callback_data: 'but4'}],          
            [{text:'Новости', callback_data: 'but5'}]
            // {text:'Гражданам', callback_data: 'but3'}, 
        ]
    })
}

const ButContacts = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{text:'Реквизиты', url: 'https://dionoyabrsk.yanao.ru/about/contacts/'}, {text:'Назад', callback_data: 'backBut'}],
                    [{text:'Группа в вк', url: 'https://vk.com/dio_noyabrsk'}]    
                ]
            })
}
//____________________________________________________________
        // const MenuDepartment = {
        //     reply_markup: JSON.stringify({
        //         inline_keyboard: [
        //             [{text:'О департаменте', callback_data: 'but11'}, {text:'Структура', callback_data: 'but12'}],          
        //             [{text:'Информационные системы', callback_data: 'but13'}, {text:'Вакансии', callback_data: 'but14'}],
        //             [{text:'Положение о департаменте', callback_data: 'but15'}, {text:'Контакты и реквизиты', callback_data: 'but16'} ]
        //         ]
        //     })
        // }
        //         const MenuCorruption = {
        //             reply_markup: JSON.stringify({
        //                 inline_keyboard: [
        //                     [{text:'Методические рекомендации', callback_data: 'but111'}, {text:'Нормативные правовые акты в сфере противодействия коррпуции', callback_data: 'but121'}],          
        //                     [{text:'О выполнении иной оплачиваемой работы', callback_data: 'but131'}, {text:'Ящик для обращения граждан по фактам коррупционной направленности', callback_data: 'but141'}]
        //                 ]
        //             })
        //         }
        //         const MenuHousing = {
        //             reply_markup: JSON.stringify({
        //                 inline_keyboard: [
        //                     [{text:'Переселение граждан за пределы ЯНАО', callback_data: 'but121'}, {text:'Предоставление социальных выплат работникам бюджетной сферы на приобретение жилья на первичном рынке', callback_data: 'but122'}],          
        //                     [{text:'Предоставление социальных выплат гражданам проживающих в строениях не предназначенных для проживания', callback_data: 'but123'}, {text:'Предоставление социальных выплат гражданам, проживающим в жилых помещениях, непригодных для проживания, на приобретение жилых помещений за пределами ЯНАО', callback_data: 'but124'}]
        //                     [{text:'', callback_data: 'but121'}, {text:'', callback_data: 'but122'}],          
        //                     [{text:'', callback_data: 'but123'}, {text:'', callback_data: 'but124'}]//!!!!!!!!!!!!!!!!!!!!!!!!!!
                        
                        
        //                 ]
        //             })
        //         }

        // const MenuActivity = {
        //     reply_markup: JSON.stringify({
        //         inline_keyboard: [
        //             [{text:'Противодействие коррупции', callback_data: 'but21'}, {text:'Жилищные отношения', callback_data: 'but22'}],          
        //             [{text:'Земельные отношения', callback_data: 'but23'}, {text:'Имущественные отношения', callback_data: 'but24'}],
        //             [{text:'Экономика', callback_data: 'but25'}, {text:'Кадровая политика', callback_data: 'but26'} ],
        //             [{text:'Оказание государственных услуг и (или) функций', callback_data: 'but27'} ]
        //         ]
        //     })
        // }

        // const MenuDocuments = {
        //     reply_markup: JSON.stringify({
        //         inline_keyboard: [
        //             [{text:'Документы', callback_data: 'but31'}]          
        //         ]
        //     })
        // }
        // const MenuNews = {
        //     reply_markup: JSON.stringify({
        //         inline_keyboard: [
        //             [{text:'Новости', callback_data: 'but41'}]          
        //         ]
        //     })
        // }
//____________________________________________________________

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Привет'}
    ])
    //_____________________Запуск__________________________
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        if (text === '/start'){
            await bot.sendPhoto(chatId, 'https://i.ibb.co/x3gWr0D/image.png')
            return bot.sendMessage(chatId, 'Приветствуем в телеграмм-боте Департамента имущественных отношений г. Ноябрьск! Выберите интересующий Вас пункт меню:', MenuNavigation)

            // return bot.sendMessage(chatId,'Меню:', MenuNavigation)
        }
        return bot.sendMessage(chatId, 'Я вас не понимаю, попробуйте еще раз!)')
         
    })   

    //https://mastergroosha.github.io/telegram-tutorial/docs/lesson_08/

    //____________________Обработчик основного меню__________________________
    bot.on('callback_query', query => {
        const html = `<strong>Контакты:</strong>\n
    <b>·Мы находимся по адресу:</b>
   <pre>ул. Ленина, дом 29, г. Ноябрьск, Ямало-Ненецкий автономный округ, почтовый индекс: 629802</pre>\n
    <b>·Телефон приемной:</b>
   <pre>(3496) 32-24-44</pre>\n
    <b>·Email:</b>
   <pre>ngdi@noyabrsk.yanao.ru</pre>\n`
        switch (query.data){
            case 'but4':
                bot.sendPhoto(query.message.chat.id, 'https://dionoyabrsk.yanao.ru/upload/uf/a0c/editor_image_10_02_50_18.02.2020.jpeg').then(function(resultFromPhoto){
            
            bot.sendMessage(query.message.chat.id, html, {
                parse_mode: 'HTML'
              })
              bot.sendMessage(query.message.chat.id, 'Для просмотра реквизитов перейдите по ссылке', ButContacts)
            }).catch(function(error){
                bot.sendMessage(query.message.chat.id, 'Я Вас не понимаю, попробуйте еще раз!)')
            }).done();
                break
            case 'but5':
                bot.sendMessage(query.message.chat.id, 'https://dionoyabrsk.yanao.ru/presscenter/news/', {disable_web_page_preview: true});
                break
            case 'backBut': 
                 bot.sendPhoto(query.message.chat.id, 'https://i.ibb.co/x3gWr0D/image.png')     
                    bot.sendMessage(query.message.chat.id, 'Выберите интересующий Вас пункт меню:', MenuNavigation)         
                break
        }

        // if(query.data === 'but4'){
        //     bot.sendPhoto(query.message.chat.id, 'https://dionoyabrsk.yanao.ru/upload/uf/a0c/editor_image_10_02_50_18.02.2020.jpeg').then(function(resultFromPhoto){
            
        //     bot.sendMessage(query.message.chat.id, html, {
        //         parse_mode: 'HTML'
        //       })
        //       bot.sendMessage(query.message.chat.id, 'Для просмотра реквизитов перейдите по ссылке', ButContacts)
        //     }).catch(function(error){
        //         bot.sendMessage(query.message.chat.id, 'Я вас не понимаю, попробуйте еще раз!)')
        //     }).done();
        //     // bot.sendMessage(query.message.chat.id, html, {
        //     //     parse_mode: 'HTML'
        //     // });
        //    //bot.sendMessage(query.message.chat.id, `https://dionoyabrsk.yanao.ru/about/contacts/`, {disable_web_page_preview: false});
        // }
        // else if(query.data === 'but5'){
        //     bot.sendMessage(query.message.chat.id, 'https://dionoyabrsk.yanao.ru/presscenter/news/', {disable_web_page_preview: true});
        // }
        
      
    })

    // <strong>·Мы находимся по адресу:</strong>\n
    //         <pre>ул. Ленина, дом 29, г. Ноябрьск,   Ямало-Ненецкий автономный округ, почтовый индекс: 629802</pre>
    //         <b>·Телефон приемной:</b><pre>(3496) 32-24-44</pre>\n
    //         <b>·Email:</b><pre>ngdi@noyabrsk.yanao.ru</pre>\n



    // const data = msg.data;
    // const chatId = msg.chat.id;
    // if (data === 'but1'){
    //     bot.sendMessage(chatId, 'Yes')
    // }else{
    //     bot.sendMessage(chatId, 'No')
    // }




    // bot.on('callback_query', msg =>{
    //     const data = msg.data;
    //     const chatId = msg.message.chat.id;

    //     console.log(msg.data)

    //     if(data === but1){
    //         return bot.sendMessage(chatId, 'Выберите нужный пункт:', MenuDepartment)
    //     }

    // })
}

// bot.on('message', async msg => {
//     const data = msg.data;
//     const chatId = msg.chat.id;
//     if (data === 'but1'){       
//         return bot.sendMessage(chatId, 'Выберите интересующий пункт меню:', MenuDepartment)

//         // return bot.sendMessage(chatId,'Меню:', MenuNavigation)
//     }
//     return bot.sendMessage(chatId, 'Я вас не понимаю, попробуйте еще раз!)')
     
// })   


start()
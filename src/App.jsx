import logo from './logo.svg';
import './App.css';
// blue color = #1d9bf0
// gray color = #71767b
// white color = #e7e9ea
// red color = #f2202d

   /*let  toto = [
      /* {
        'message_id': 1,
        'from_contact': 1,
        'message': {
          'type': 'emoji',
          'value': 'https://abs-0.twimg.com/emoji/v2/svg/1f634.svg'
        },
        'message_date': 'Jan 9:56 PM'
      },
      {
        'message_id': 2,
        'from_contact': 2,
        'message_text': 'Hello',
        'message_date': 'Jan 10:56 PM'
      }, 
  ]*/

/*   let contacts = [
      {
        'id': 2,
        'profile': 'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
        'name': 'John',
        'pseudo': '@John',
        'description': 'fullstack developper',
        'joined': 'July 2016',
        'followers': 70,
        'followed': [ // last 3 followed with user connected
          {
            'id': 3,
            'name': 'John Gabon',
            'profile': 'https://flowbite.com/docs/images/people/profile-picture-1.jpg'
          },
          {
            'id': 4,
            'name': 'Adam',
            'profile': 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
          },
          {
            'id': 5,
            'name': 'Dupon',
            'profile': 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'
          },
        ],
        'messages': [
            {
              'id': 1,
              'sender': 1,
              'type': {
                'label': 'emoji',
                'content': 'https://abs-0.twimg.com/emoji/v2/svg/1f634.svg',
              }
            },
            {
              'id': 2,
              'sender': 2,
              'type': {
                'label': 'emoji',
                'content': 'https://abs-0.twimg.com/emoji/v2/svg/1f634.svg',
              }
            }
            {
              'id': 2,
              'sender': 2,
              'type': {
                'label': 'text',
                'content': 'https://abs-0.twimg.com/emoji/v2/svg/1f634.svg',
              }
            }
        ]
      }
  ] */
// table message: [message_id, from_contact, to_contact_id, message_text, sent_datetime]
import ChatBox from './components/ChatBox';


function App() {

  return (
    <div className='bg-twitter-primary'>
      <div className='mx-auto bg-red-200 w-[60%] h-full'>
        <div className='h-96 w-full bg-[#1d9bf0]'>
            hssh
        </div>
        <div className='h-96 w-full bg-[#16181c]'>
            hssh
        </div>
        <div className='h-96 w-full bg-[#1d9bf0]'>
            hssh
        </div>
        <div className='h-96 w-full bg-[#16181c]'>
            hssh
        </div>
        <div className='h-96 w-full bg-[#1d9bf0]'>
            hssh
        </div>
        <div className='h-96 w-full bg-[#16181c]'>
            hssh
        </div>
        <div className='h-96 w-full bg-[#1d9bf0]'>
            hssh
        </div>
      </div>
      {/* box chat */}
      <ChatBox />
      {/* box chat */}

    </div>
  );
}

export default App;

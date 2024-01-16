import PropTypes from 'prop-types';  
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

export function ChatsPage(props) {
  const chatProps = useMultiChatLogic(
    '8f179cb9-711f-44a1-939e-ada1d8efa771',
    props.user.username,
    props.user.secret
  );
  
  return (
    <>
    <div className='background'>
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} />
      </div>
    </>
  );
}

export default ChatsPage

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

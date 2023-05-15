import getConversations from '../actions/getConversations';
import Sidebar from '../components/Sidebar/Sidebar';
import ConversationList from './components/ConversationList';

const ConverssationsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const conversations = await getConversations();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
};

export default ConverssationsLayout;

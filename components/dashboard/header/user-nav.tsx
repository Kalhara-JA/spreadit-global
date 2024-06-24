'use client';

import { UserAvatar } from './user-details';

type Props = {
  user: {
    name: string;
    image: string;
    email: string;
  };
};

export function UserNav({ user }: Props) {
  return (
    <div>
      <UserAvatar
        user={{ name: user.name, image: user.image, email: user.email }}
        className="h-8 w-8 hover:cursor-pointer"
      />
    </div>
  );
}

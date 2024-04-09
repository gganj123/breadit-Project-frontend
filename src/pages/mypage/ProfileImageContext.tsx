/**
 * 프로필 사진 useContext로 상태관리
 */
import { createContext, useContext, useState, ReactNode } from 'react';
const baseImg =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
type ProfileImageContextType = {
  profileImage: string;
  setProfileImage: (imageUrl: string) => void;
};

const ProfileImageContext = createContext<ProfileImageContextType>({
  profileImage: baseImg,
  setProfileImage: () => {},
});

export const useProfileImage = () => useContext(ProfileImageContext);

type ProfileImageProviderProps = {
  children: ReactNode;
};

export const ProfileImageProvider = ({
  children,
}: ProfileImageProviderProps) => {
  const [profileImage, setProfileImage] = useState<string>(baseImg);

  return (
    <ProfileImageContext.Provider value={{ profileImage, setProfileImage }}>
      {children}
    </ProfileImageContext.Provider>
  );
};

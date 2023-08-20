import React from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}
const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="
              inline-flex
              w-full
              justify-center
              rounded-md
              py-2
              px-4
             text-gray-500
             hover:bg-gray-50
             ring-gray-300
                shadow-sm
                ring-1
                ring-inset
               focus:outline-offset-0
                "
      >
        <Icon />
      </button>
    </>
  );
};

export default AuthSocialButton;

// import React from 'react';
// import ImageUploadForm from './ImageUploadForm';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../../redux/store';

// interface ProfileUploadFormProps {
//   onNextStep: () => void;
// }

// const PictureUploadForm: React.FC<ProfileUploadFormProps> = ({ onNextStep }) => {
//   const gender = useSelector((state: RootState) => state.signup.gender);
//   const taste = useSelector((state: RootState) => state.signup.sexualPreference);
//   const bio = useSelector((state: RootState) => state.signup.introduction);
//   const tags = useSelector((state: RootState) => state.signup.selectedTags);
//   // const hate_tags = useSelector((state: RootState) => state.signup.hate_tags);

//   const handleSubmitUserProfile = async () => {
//     // const result = await axiosInstance.post('/user/setProfile', {
//     //   gender: gender,
//     //   taste: taste,
//     //   bio: bio,
//     //   tags: tags
//     //   // hate_tags: hate_tags
//     // });
//     // if (result && result.status === 200) {
//     //   router.push('/home');
//     // }
//     onNextStep();
//   };
//   return (
//     <form className="max-w-md min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-purple-500/50">
//         프로필 사진 업로드
//       </h5>
//       <div className="flex justify-center mb-5">
//         <ImageUploadForm width={400} height={400} />
//       </div>

//       <div className="flex justify-end">
//         <button
//           type="button"
//           className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           onClick={handleSubmitUserProfile}
//         >
//           Next
//         </button>
//       </div>
//     </form>
//   );
// };

// export default PictureUploadForm;

import { checkPictureLength } from './components/ImageUploadGrid';

export const submitProfile = async (pictures: string[], setting: () => void) => {
  try {
    await checkPictureLength(pictures);
    setting();
  } catch (error: any) {
    alert(error);
  }
};

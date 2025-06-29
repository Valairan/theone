// secure/user.ts

import functions from '@react-native-firebase/functions';

// Define types for inputs and outputs if you know them
type OnboardingDataType = string | number | boolean | object;
type FirebaseFunctionResponse<T = any> = {
  data: T;
};

export const addOnboardingInformation = async (
  datatype: string,
  data: OnboardingDataType
): Promise<FirebaseFunctionResponse> => {
  if (!data || !datatype) throw new Error('Fields cannot be empty');

  try {
    const response = await functions()
      .httpsCallable('addOnboardingInformation')({ datatype, data });

    return response;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to add onboarding information');
  }
};

export const sendEmailVerificationLink = async (
  email: string
): Promise<FirebaseFunctionResponse> => {
  try {
    const response = await functions()
      .httpsCallable('sendEmailVerificationLink')(email);

    return response;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to send verification link');
  }
};

export const verifyEmailAddress = async (
  code: string
): Promise<FirebaseFunctionResponse> => {
  try {
    const response = await functions()
      .httpsCallable('verifyEmailAddress')({ code });

    return response;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to verify email');
  }
};

export const retrieveCurrentUser = async (): Promise<FirebaseFunctionResponse> => {
  try {
    const response = await functions().httpsCallable('retrieveCurrentUser')();

    return response;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to retrieve current driver');
  }
};

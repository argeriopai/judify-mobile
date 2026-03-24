<<<<<<< HEAD
import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";

import { apiFetch } from "@/lib/api";

=======
import * as SecureStore from "expo-secure-store";

>>>>>>> 01c8145 (Atualização Judify Mobile)
const ACCESS_KEY = "judify_access_token";
const REFRESH_KEY = "judify_refresh_token";

export async function getAccessToken(): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(ACCESS_KEY);
  } catch {
    return null;
  }
}

export async function getRefreshToken(): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(REFRESH_KEY);
  } catch {
    return null;
  }
}

export async function setTokens(access: string, refresh: string): Promise<void> {
  await SecureStore.setItemAsync(ACCESS_KEY, access);
  await SecureStore.setItemAsync(REFRESH_KEY, refresh);
}

export async function setAccessToken(access: string): Promise<void> {
  await SecureStore.setItemAsync(ACCESS_KEY, access);
}

export async function clearTokens(): Promise<void> {
  await SecureStore.deleteItemAsync(ACCESS_KEY);
  await SecureStore.deleteItemAsync(REFRESH_KEY);
}
<<<<<<< HEAD


export const tokenCahe = {
    getToken: async () => {
        try {
            const token = await SecureStore.getItemAsync("token");
            return token || null;
        } catch (error) {
            console.error("Error getting token from cache:", error);
            return null;
        }
    },
    saveToken: async (key: string, value: string) => {
        try {
            await SecureStore.setItemAsync(key, value);
        } catch (error) {
            console.error("Error saving token to cache:", error);
        }
    },
    clearToken: async () => {
        try {
            await SecureStore.deleteItemAsync("token");
        } catch (error) {
            console.error("Error clearing token from cache:", error);
        }
    },
};

export const googleOAuth = async (startOAuthFlow: any) => {
    try {
        const { createdSessionId, setActive, signUp } = await startOAuthFlow({
            strategy: "oauth_google",
            redirectUrl: Linking.createURL("/(root)/(tabs)/home"),
        });
        
        if (createdSessionId) {
            if (setActive) {
                await setActive({ session: createdSessionId });

                if (signUp.createdUserId) {
                    await apiFetch("/(api)/user", {
                        method: "POST",
                        body: JSON.stringify({
                            name: `${signUp.fistName} ${signUp.lastName}`,
                        }),
                    });
                }
                return {
                    success: true,
                    code: "success",
                    message: "You have successfully signed in with Google!",
                };
            }
        }
        return {
            success: false,
            code: "error",
            message: "An unknown error occurred during Google sign-in.",
        };
    } catch (error) {
        console.log("Error during Google OAuth flow:", error);
        return {
            success: false,
            code: "error",
            message: "An error occurred during Google sign-in. Please try again.",
        }
    }
};
=======
>>>>>>> 01c8145 (Atualização Judify Mobile)

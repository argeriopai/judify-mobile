import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";

import { fetchAPI } from "./fetch";

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
                    await fetchAPI("/(api)/user", {
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
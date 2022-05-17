// import { sendPushNotifications } from '../modules/notifications/notificaiton.service';

/**
 * first letter to uppercase
 * @param displayName
 */
export const renderDisplayName = (displayName: string | null) => {
  if (!displayName) return displayName;
  const result = displayName.trim().split(' ');
  result.forEach((name, index) => {
    result[index] = name.charAt(0).toUpperCase() + name.slice(1);
  });
  return result.join(' ');
};

/**
 * Push notification common function
 */
export const commonPushNotificationFunction = async (
  tokenArray: Array<string>,
  msg: string,
  url: string,
  title: string,
  type: string
): Promise<any> => {
  // const promises: any = [];
  if (tokenArray && tokenArray.length > 0) {
    tokenArray.forEach((token) => {
      if (token && token !== '') {
        // promises.push(sendPushNotifications(token, msg, url, title, type));
      }
    });
  }
};

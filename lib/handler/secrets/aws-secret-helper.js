"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSecretString = void 0;
exports.getSecretString = async (secretId, smClient, jsonField) => {
    const secretToEncrypt = await smClient.getSecretValue({ SecretId: secretId });
    let secretString = secretToEncrypt.SecretString;
    if (!secretString) {
        throw new Error('SecretString is empty from secret with id: ' + secretId);
    }
    if (jsonField) {
        try {
            secretString = JSON.parse(secretString)[jsonField];
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error('Error while parsing SecretString with id: ' + secretId + ' and jsonField: ' + jsonField + ': ' + error.message);
            }
            throw error;
        }
    }
    if (!secretString) {
        throw new Error('SecretString is empty from secret with id: ' + secretId);
    }
    return secretString;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLXNlY3JldC1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGFuZGxlci9zZWNyZXRzL2F3cy1zZWNyZXQtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVhLFFBQUEsZUFBZSxHQUFHLEtBQUssRUFBRSxRQUFnQixFQUFFLFFBQXdCLEVBQUUsU0FBa0IsRUFBbUIsRUFBRTtJQUN2SCxNQUFNLGVBQWUsR0FBRyxNQUFNLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUU5RSxJQUFJLFlBQVksR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDO0lBQ2hELElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsR0FBRyxRQUFRLENBQUMsQ0FBQztLQUMzRTtJQUNELElBQUksU0FBUyxFQUFFO1FBQ2IsSUFBSTtZQUNGLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7Z0JBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLEdBQUcsUUFBUSxHQUFHLGtCQUFrQixHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xJO1lBQ0QsTUFBTSxLQUFLLENBQUM7U0FDYjtLQUNGO0lBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0tBQzNFO0lBQ0QsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VjcmV0c01hbmFnZXIgfSBmcm9tICdAYXdzLXNkay9jbGllbnQtc2VjcmV0cy1tYW5hZ2VyJztcblxuZXhwb3J0IGNvbnN0IGdldFNlY3JldFN0cmluZyA9IGFzeW5jIChzZWNyZXRJZDogc3RyaW5nLCBzbUNsaWVudDogU2VjcmV0c01hbmFnZXIsIGpzb25GaWVsZD86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IHNlY3JldFRvRW5jcnlwdCA9IGF3YWl0IHNtQ2xpZW50LmdldFNlY3JldFZhbHVlKHsgU2VjcmV0SWQ6IHNlY3JldElkIH0pO1xuXG4gIGxldCBzZWNyZXRTdHJpbmcgPSBzZWNyZXRUb0VuY3J5cHQuU2VjcmV0U3RyaW5nO1xuICBpZiAoIXNlY3JldFN0cmluZykge1xuICAgIHRocm93IG5ldyBFcnJvcignU2VjcmV0U3RyaW5nIGlzIGVtcHR5IGZyb20gc2VjcmV0IHdpdGggaWQ6ICcgKyBzZWNyZXRJZCk7XG4gIH1cbiAgaWYgKGpzb25GaWVsZCkge1xuICAgIHRyeSB7XG4gICAgICBzZWNyZXRTdHJpbmcgPSBKU09OLnBhcnNlKHNlY3JldFN0cmluZylbanNvbkZpZWxkXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB3aGlsZSBwYXJzaW5nIFNlY3JldFN0cmluZyB3aXRoIGlkOiAnICsgc2VjcmV0SWQgKyAnIGFuZCBqc29uRmllbGQ6ICcgKyBqc29uRmllbGQgKyAnOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbiAgaWYgKCFzZWNyZXRTdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlY3JldFN0cmluZyBpcyBlbXB0eSBmcm9tIHNlY3JldCB3aXRoIGlkOiAnICsgc2VjcmV0SWQpO1xuICB9XG4gIHJldHVybiBzZWNyZXRTdHJpbmc7XG59O1xuIl19
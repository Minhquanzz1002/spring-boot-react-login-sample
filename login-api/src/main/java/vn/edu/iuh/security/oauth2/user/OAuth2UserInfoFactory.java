package vn.edu.iuh.security.oauth2.user;

import lombok.extern.slf4j.Slf4j;
import vn.edu.iuh.exceptions.OAuth2AuthenticationProcessingException;

import java.util.Map;
import static vn.edu.iuh.models.AuthProvider.GOOGLE;
import static vn.edu.iuh.models.AuthProvider.GITHUB;
@Slf4j
public class OAuth2UserInfoFactory {
    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
        log.info("Signing in with " + registrationId);
        log.info(attributes.toString());
        if (registrationId.equalsIgnoreCase(GOOGLE.toString())) {
            return new GoogleOAuth2UserInfo(attributes);
        } else if (registrationId.equalsIgnoreCase(GITHUB.toString())) {
            return new GithubOAuth2UserInfo(attributes);
        } else {
            log.info("Sorry! Login with " + registrationId + " is not supported yet.");
            throw new OAuth2AuthenticationProcessingException("Sorry! Login with " + registrationId + " is not supported yet.");
        }
    }
}

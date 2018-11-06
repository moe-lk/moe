<?php
namespace Lib;

use Exception;
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Parser;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\ValidationData;
use Lcobucci\JWT\Token;

class Auth
{

    public function IssueToken($data)
    {
        $signer = new Sha256();
        $user = $data[0];
        $token = (new Builder())->setIssuer(IIS) // Configures the issuer (iss claim)
            ->setAudience(AUD) // Configures the audience (aud claim)
            ->setId($user->user_name, true) // Configures the id (jti claim), replicating as a header item
            ->setIssuedAt(time()) // Configures the time that the token was issue (iat claim)
        // ->setNotBefore(time() + 15) // Configures the time that the token can be used (nbf claim)
            ->setExpiration(time() + 34128000) // Configures the expiration time of the token (exp claim)
            ->set('uid', 1) // Configures a new claim, called "uid"
            ->sign($signer, $user->user_name) // creates a signature using "testing" as key
            ->getToken(); // Retrieves the generated token
        return 'Bearer ' . $token;
    }

    public function isValidToken()
    {
        $token = getBearerToken();
        log_message('info',$token);
        try {
            $data = new ValidationData();
            $token = (new Parser())->parse((string) $token);
            return $token->validate($data);
        } catch (Exception $e) {
            response('Invalid Token',401,$e->getMessage());
            exit;
        }

    }

    public function getjti(){
        $token = getBearerToken();
        if( $token!= ''){
            $token = (new Parser())->parse((string) $token);
            return $token->getHeader('jti');
        }else{
            return null;
        }
    }

    public function doExpire()
    {
        $token = getBearerToken();
        try {
            $data = new ValidationData();
            $token = (new Parser())->parse((string) $token);
            $data->setCurrentTime(time());
            $token->validate($data);
        } catch (Exception $e) {
            response('Invalid Token',401,$e->getMessage());
            return false;
        }
    }

}

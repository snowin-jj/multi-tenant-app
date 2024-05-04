import { StytchB2B } from "@stytch/react/b2b";
import {
  AuthFlowType,
  B2BOAuthProviders,
  B2BProducts,
  StytchEventType,
} from "@stytch/vanilla-js/b2b";
import { useNavigate } from "react-router-dom";

export default function Authenticate() {
  const navigate = useNavigate();

  const stytchProps = {
    config: {
      products: [
        B2BProducts.emailMagicLinks,
        B2BProducts.oauth,
        B2BProducts.sso,
      ],
      sessionOptions: { sessionDurationMinutes: 60 },
      authFlowType: AuthFlowType.Discovery,
      oauthOptions: {
        providers: [B2BOAuthProviders.Google],
      },
    },
    callback: {
      onEvent: ({ type }: { type: StytchEventType; data: unknown }) => {
        if (type === StytchEventType.B2BDiscoveryOrganizationsCreate) {
          navigate("/dashboard");
        } else if (
          type === StytchEventType.B2BDiscoveryIntermediateSessionExchange
        ) {
          navigate("/dashboard");
        } else {
          console.log("Type", type);
        }
      },
    },
  };

  return (
    <StytchB2B config={stytchProps.config} callbacks={stytchProps.callback} />
  );
}

import { render, screen, fireEvent } from "@testing-library/react";
import { SubscribeButton } from ".";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

jest.mock("next-auth/client", () => {
  return {
    useSession() {
      return [null, false];
    },
  };
});

describe("SubscribeButton Component", () => {
  it("render correctly", () => {
    render(<SubscribeButton />);

    expect(screen.getByText("Subscribe now")).toBeInTheDocument();
  });

  it('redirects user to sign in when not authenticated', () => {
    render(<SubscribeButton />);
    const subscribeButton = screen.getByText('Subscribe now');
    fireEvent.click(subscribeButton);

    // expect()
  })
});

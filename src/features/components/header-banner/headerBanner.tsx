import { BannerContainer, HeaderBannerComponent, IHeaderBanner, Mask } from "./headerBanner.styled";

export const HeaderBanner: React.FC<IHeaderBanner> = (props) => {
  

  return (
    <BannerContainer>
      <HeaderBannerComponent {...props}>
        <Mask />
      </HeaderBannerComponent>
    </BannerContainer>
  );
}
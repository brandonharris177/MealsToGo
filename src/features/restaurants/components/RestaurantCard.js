import React from "react";
import { Text, View } from "react-native";
import { Card, Title } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.bg.primary};
`;

const StyledTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Adress = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RatingOpenWrapper = styled(View)`
  justify-content: space-between;
  flex-direction: row;
`;

const RatingWrapper = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  justify-content: space-between;
`;

const HoursUnkown = styled(Text)`
  color: ${(props) => props.theme.colors.text.error};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Restaurant Name Unavailable",
    icon,
    photos = [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAB+klEQVR42u2bu0oDQRSGf8RAtNNgL1gIKQXBJxAM+AxbpLAQLHyBYGG7kICFEFifIkgI+AIRLJJGBMVeIsuCCpuMjRuyca+z1wn/N+2ZnPPBnh3IngEIIYQQQog/degYw4TIeZkYQ0c9WfEVdGDnXvristFBRb78fqHFO6svq9AuRfkCAm25Z98ujYAt0wt6acoXENDjC4xKJTCKL2CWSsCMLyBKtihAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUEBtgS4MlQUeUcWmxJ/3JRH4wO7f9x9LRYEpGvPf11QUuHJlMFQTuMeaK0O8TshQoIubCFFvqHl8CbWKFxiiinUMQqK+ceiZRStawHmrbOE5MO7MN49RpMAUJ/P4fUx84+4C8kTthEwEWq4dxz7f9p+wETITYBUj0Ft6qwAXHlET7IXm0ooQeMW2x67bpagZTiNlM/IW+MKBz4jOgyvuOmK28E5IWaDpu6+Gl3nU4N9DJt8JqQp0Q0r5hIDAO3ZiZdTyEhiiGrK3ARs/OIqd08hDwDm6grnEucSQVVAnpCSweHRlMyNpZSvQynzMU8tSoBfjrSKPkZWA99GVPt6dkFjA7+jKqxMSCzRzHXjW+McWBSiQVED5wVflR4+VH/5Wfvxe+QsQK3AFRflLQE4vKHwNixBCCCFktfkFvnhXh90kWS4AAAAASUVORK5CYII=",
    ],
    adress = "Restaurant Adress Unavailable",
    isOpenNow = null,
    rating = null,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <StyledCard>
      <CardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Card.Content>
        <StyledTitle>{name}</StyledTitle>
        <RatingOpenWrapper>
          {rating !== null ? (
            <>
              <RatingWrapper>
                {ratingArray.map(() => (
                  <SvgXml xml={star} width={20} height={20} />
                ))}
              </RatingWrapper>
            </>
          ) : (
            <RatingWrapper>
              <Text>Rating Unavailable</Text>
            </RatingWrapper>
          )}
          {isOpenNow === null ? (
            <HoursUnkown>Hours Unknown</HoursUnkown>
          ) : (
            <SvgXml xml={open} width={20} height={20} />
          )}
        </RatingOpenWrapper>
        <Adress>{adress}</Adress>
      </Card.Content>
    </StyledCard>
  );
};

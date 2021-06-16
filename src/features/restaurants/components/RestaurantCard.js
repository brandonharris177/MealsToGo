import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import {
  CardCover,
  IconWrapper,
  RatingOpenWrapper,
  RatingWrapper,
  StyledCard,
  TypeIcon,
} from "./RestaurantCardStyling.js";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Restaurant Name Unavailable",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
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
        <Text variant="label">{name}</Text>
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
              <Text>Ratings Unavailable</Text>
            </RatingWrapper>
          )}
          <IconWrapper>
            {isClosedTemporarily === true ? (
              <Text variant="error">TEMPORARILY CLOSED</Text>
            ) : isOpenNow === null ? (
              <Text variant="error">HOURS UNKNOWN</Text>
            ) : isOpenNow === true ? (
              <SvgXml xml={open} width={20} height={20} />
            ) : (
              <Text variant="error">CLOSED</Text>
            )}
            {icon && <TypeIcon source={{ uri: icon }} />}
          </IconWrapper>
        </RatingOpenWrapper>
        <Text variant="caption">{adress}</Text>
      </Card.Content>
    </StyledCard>
  );
};

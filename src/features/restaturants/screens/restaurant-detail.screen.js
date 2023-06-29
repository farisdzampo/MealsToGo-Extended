import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { SafeArea } from "../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const breakfastIcon = () => (
  <Ionicons name="fast-food-outline" size={24} color="black" />
);
const lunchIcon = () => (
  <Ionicons name="pizza-outline" size={24} color="black" />
);
const dinnerIcon = () => (
  <Ionicons name="restaurant-outline" size={24} color="black" />
);
const drinksIcon = () => (
  <Ionicons name="beer-outline" size={24} color="black" />
);
const arrowUpIcon = () => (
  <Ionicons name="arrow-up-outline" size={24} color="black" />
);
const arrowDownIcon = () => (
  <Ionicons name="arrow-down-outline" size={24} color="black" />
);
const arrowUp = (props) => <List.Icon {...props} icon={arrowUpIcon} />;
const arrowDown = (props) => <List.Icon {...props} icon={arrowDownIcon} />;

export const RestaurantDetailScreen = ({ route }) => {
  const [expanded, setExpanded] = React.useState(true);
  const { restaurant } = route.params;

  const handlePress = () => setExpanded(!expanded);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          expanded={!expanded}
          onPress={handlePress}
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon={breakfastIcon} />}
          right={!expanded ? arrowUp : arrowDown}
        >
          <List.Item title="Omlet sa sirom" />
          <List.Item title="Engleski dorucak" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon={lunchIcon} />}
          right={!expanded ? arrowUp : arrowDown}
        >
          <List.Item title="Piletina u sosu od gljiva" />
          <List.Item title="Double Burger" />
          <List.Item title="Mac and Cheese" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon={dinnerIcon} />}
          right={!expanded ? arrowUp : arrowDown}
        >
          <List.Item title="Rolovana teletina" />
          <List.Item title="Gulas" />
          <List.Item title="Teleci medaljoni" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon={drinksIcon} />}
          right={!expanded ? arrowUp : arrowDown}
        >
          <List.Item title="Toceno pivo" />
          <List.Item title="Gazirani sok" />
          <List.Item title="Prirodni sok" />
          <List.Item title="Vino" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

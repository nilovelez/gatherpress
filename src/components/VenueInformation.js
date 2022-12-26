import { Flex, FlexItem, Icon } from '@wordpress/components';

const VenueInformation = ({ name, fullAddress, phoneNumber, website }) => {
	return (
		<div className="gatherpress-venue">
			{(name || fullAddress) && (
				<Flex justify="normal" align="flex-start" gap="4">
					<FlexItem
						display="flex"
						className="gatherpress-venue__icon"
					>
						<Icon icon="location" />
					</FlexItem>
					<FlexItem>
						{name && (
							<div className="gp-venue_information__name has-medium-font-size">
								<strong>{name}</strong>
							</div>
						)}
						{fullAddress && (
							<div className="gatherpress-venue__full-address">
								{fullAddress}
							</div>
						)}
					</FlexItem>
				</Flex>
			)}
			{(phoneNumber || website) && (
				<Flex justify="normal" gap="8">
					{phoneNumber && (
						<FlexItem>
							<Flex justify="normal" gap="4">
								<FlexItem
									display="flex"
									className="gatherpress-venue__icon"
								>
									<Icon icon="phone" />
								</FlexItem>
								<FlexItem>
									<div className="gatherpress-venue__phone-number">
										{phoneNumber}
									</div>
								</FlexItem>
							</Flex>
						</FlexItem>
					)}
					{website && (
						<FlexItem>
							<Flex justify="normal" gap="4">
								<FlexItem
									display="flex"
									className="gatherpress-venue__icon"
								>
									<Icon icon="admin-site-alt3" />
								</FlexItem>
								<FlexItem>
									<div className="gatherpress-venue__website">
										<a
											href={website}
											target="_blank"
											rel="noreferrer noopener"
										>
											{website}
										</a>
									</div>
								</FlexItem>
							</Flex>
						</FlexItem>
					)}
				</Flex>
			)}
		</div>
	);
};

export default VenueInformation;
export interface Coin {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number | string;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number | string;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi?: CoinRoi;
  symbol: string;
  total_supply: number;
  total_volume: number;
}

export interface CoinRoi {
  times: number;
  currency: string;
  percentage: number;
}

export interface CoinDetails {
  additional_notices: any[];
  asset_platform_id: string | number;
  block_time_in_minutes: number;
  categories: string[];
  coingecko_rank: number;
  coingecko_score: number;
  community_data: CommunityData;
  community_score: number;
  country_origin: string;
  description: any;
  detail_platforms: any;
  developer_data: any;
  developer_score: number;
  genesis_date: string;
  hashing_algorithm: string;
  id: string;
  image: Image;
  last_updated: string;
  links: any;
  liquidity_score: number;
  localization: any;
  market_cap_rank: number;
  market_data: any;
  name: string;
  platforms: any;
  public_interest_score: number;
  public_interest_stats: any;
  public_notice: null;
  sentiment_votes_down_percentage: number;
  sentiment_votes_up_percentage: number;
  status_updates: any[];
  symbol: string;
  tickers: any[];
}

export interface CommunityData {
  facebook_likes: number;
  reddit_accounts_active_48h: number;
  reddit_average_comments_48h: number;
  reddit_average_posts_48h: number;
  reddit_subscribers: number;
  telegram_channel_user_count: number;
  twitter_followers: number;
}

export interface Image {
  large: string;
  small: string;
  thumb: string;
}

export interface CoinChart {
  market_caps: any[];
  prices: any[];
  total_volumes: any[];
}

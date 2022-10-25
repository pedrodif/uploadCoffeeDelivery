// Packages
import styled from 'styled-components';

export const Banner = styled.section`
  width: 71rem;
  height: 23rem;
  margin: 0 auto;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const BannerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const BannerHeader = styled.div`
  width: 36.75rem;
  height: 12rem;
`

export const HeaderTitle = styled.strong`
  font-family: 'Baloo 2';
  font-size: 3rem;
  font-weight: 800;
  line-height: 3.9rem;
  color: ${(props) => props.theme['base-title']};
`

export const HeaderSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.625rem;
  margin-top: 0.938rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const BannerBody = styled.div`
  box-sizing: border-box;
  width: 35rem;
  height: 5.25rem;
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.875rem;
`

export const BannerBodyBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.625rem;
  color: ${(props) => props.theme['base-text']};
`
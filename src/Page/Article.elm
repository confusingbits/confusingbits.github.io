module Page.Article exposing (..)

import Data.Author as Author
import Date
import Element exposing (Element)
import Element.Font as Font
import Html
import Html.Attributes exposing (height, src, width)
import Metadata exposing (ArticleMetadata)
import Pages
import Pages.ImagePath as ImagePath exposing (ImagePath)
import Palette


view metadata viewForPage =
    { title = metadata.title
    , body =
        Element.column [ Element.spacing 10 ]
            [ Element.row [ Element.spacing 10 ]
                [ Author.view [] metadata.author
                , Element.column [ Element.spacing 10, Element.width Element.fill ]
                    [ Element.paragraph [ Font.bold, Font.size 24 ]
                        [ Element.text metadata.author.name
                        ]
                    , Element.paragraph [ Font.size 16 ]
                        [ Element.text metadata.author.bio ]
                    ]
                ]
            ]
            :: (publishedDateView metadata |> Element.el [ Font.size 16, Font.color (Element.rgba255 0 0 0 0.6) ])
            :: Palette.blogHeading metadata.title
            :: articalOrImageView metadata
            :: [ viewForPage ]
    }


publishedDateView metadata =
    Element.text
        (metadata.published
            |> Date.format "MMMM ddd, yyyy"
        )

articalOrImageView : ArticleMetadata -> Element msg
articalOrImageView metadata =
    case metadata.video of
        Just _ ->
            articleVideoView metadata

        Nothing ->
            articleImageView metadata.image

articleImageView : ImagePath Pages.PathKey -> Element msg
articleImageView articleImage =
    Element.image [ Element.width Element.fill ]
        { src = ImagePath.toString articleImage
        , description = "Article cover photo"
        }


articleVideoView : ArticleMetadata -> Element msg
articleVideoView metadata =
    let
        id =
            metadata.video |> Maybe.withDefault "" |> String.split "?v=" |> List.reverse |> List.head |> Maybe.withDefault ""

        url =
            "https://www.youtube.com/embed/" ++ id
    in
    Element.html
        (Html.iframe
            [ height 580
            , width 720
            , src url
            -- , property "frameborder" (Encode.string "0")
            -- , property "allowfullscreen" (Encode.string "true")
            ]
            []
        )
